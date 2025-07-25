import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, addDoc, setDoc, updateDoc, deleteDoc, onSnapshot, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// --- Firebase Variables ---
let app;
let db;
let auth;
let userId;
let isAuthReady = false;

// Global variables for Canvas environment
// Your web app's Firebase configuration - Provided by the user
const firebaseConfig = {
    apiKey: "AIzaSyCSWegFAjxpKjTbvZprUrEecKNTKFS9c1U",
    authDomain: "project-sentry-d0429.firebaseapp.com",
    projectId: "project-sentry-d0429",
    storageBucket: "project-sentry-d0429.firebasestorage.app",
    messagingSenderId: "94164185222",
    appId: "1:94164185222:web:c6ec85f7def6170083a107",
    measurementId: "G-9GKLP87MN0"
};
// Moved appId declaration to global scope
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';


// --- DOM Element References ---
let appContainer;
let mainHeader;
let questionsContainer;
let testContainer;
let preSubmitReviewContainer;
let summaryContainer;
let finalScoreDisplay;
let allQuestionsReviewList;
let preSubmitFlaggedList;
let preSubmitUnansweredList;
let backButton;
let homeButton;
let checkQuestionsAgainButton;
let retakeTestButton;

// Home Page elements
let homeContainer;
let testModeModal;
let subjectItems;
let themeToggleButton;

// Test Progress Footer elements
let testProgressFooter;
let progressBoxesContainer;

// Modals
let messageModalOverlay;
let messageModalText;
let deleteNoteConfirmModal;
let deleteNoteConfirmYes;
let deleteNoteConfirmNo;
let deleteFlashcardConfirmModal;
let deleteFlashcardConfirmYes;
let deleteFlashcardConfirmNo;

// Unified AI Modal elements
let aiButton;
let unifiedAiModalOverlay;
let unifiedAiModalCloseButton;
let chatMessagesContainer;
let chatInput;
let sendMessageButton;
let chatInitialState;
let suggestionChipsContainer;
let imageUpload;
let imagePreviewContainer;
let imagePreview;
let imageFileName;
let aiLoadingIndicator;

// Notes Interface elements
let notesInterfaceButton;
let notesInterfaceContainer;
let addNoteFab;
let fabOptionsContainer;
let addTextNoteButton;
let addChecklistNoteButton;
let notesListContainer;

// Flashcards elements (updated for new structure)
let flashcardsInterfaceButton;
let flashcardsInterfaceContainer;
let flashcardsHeaderTitle;
let flashcardBreadcrumbs;
let flashcardFoldersSection;
let foldersLoader;
let flashcardSetsSection;
let setsLoader;
let flashcardsInSection; // The actual flashcard display area
let flashcardDisplayArea;
let flashcardCard; // Reference to the current flashcard card element
let flashcardFront;
let flashcardBack;
let flashcardCountDisplay;
let flipFlashcardButton;
let prevFlashcardButton;
let nextFlashcardButton;
let addFlashcardFab;
let flashcardFabOptionsContainer;
let addNewFolderButton;
let addNewSetButton;
let addNewFlashcardButtonFromFab; // New button for adding flashcard from FAB
let newFlashcardModal;
let newFlashcardFrontInput;
let newFlashcardBackInput;
let addNewFlashcardButton; // Button inside the new flashcard modal
let cancelNewFlashcardButton;

// New Folder/Set Modals
let newFolderModal;
let newFolderModalTitle;
let newFolderNameInput;
let newFolderSubjectSelect;
let cancelNewFolderButton;
let saveFolderButton;

let newSetModal;
let newSetModalTitle;
let newSetTitleInput;
let cancelNewSetButton;
let saveSetButton;


// --- Global Variables ---
let currentSubject = '';
let currentTestMode = ''; // 'practice' or 'test'
let questions = [];
let userAnswers = {};
let flaggedQuestions = new Set();
let chatHistory = [];
let uploadedImageBase64 = null;
let userNotes = [];
let currentFlashcardIndex = 0;
let pageHistory = [];
let currentPageId = 'homeContainer';
let noteToDeleteId = null;
let flashcardToDeleteId = null;
let currentMessageModalCallback = null;

// Flashcard specific global state
const FLASHCARD_VIEW_FOLDERS = 'folders';
const FLASHCARD_VIEW_SETS = 'sets';
const FLASHCARD_VIEW_CARDS = 'cards';
let currentFlashcardView = FLASHCARD_VIEW_FOLDERS; // 'folders', 'sets', 'flashcards'
let currentFolder = null; // Stores the currently selected folder object
let currentSet = null;    // Stores the currently selected set object
let currentFlashcardsInSet = []; // Flashcards for the currently selected set

// --- Question Data (Example) ---
const allQuestions = {
    English: [
        {
            id: 'eng1',
            question: 'Which of the following is a synonym for "ubiquitous"?',
            options: ['Rare', 'Scarce', 'Pervasive', 'Limited'],
            answer: 'Pervasive',
            explanation: 'Ubiquitous means present, appearing, or found everywhere. Pervasive means spreading widely throughout an area or a group of people.'
        },
        {
            id: 'eng2',
            question: 'Identify the correct sentence:',
            options: [
                'He dont like apples.',
                'He doesnt like apples.',
                'He doesnt likes apples.',
                'He do not like apples.'
            ],
            answer: 'He doesnt like apples.',
            explanation: 'The correct auxiliary verb for third person singular (He, She, It) in the present simple negative is "does not" or "doesnt". The main verb "like" should be in its base form.'
        },
        {
            id: 'eng3',
            question: 'What is the passive voice of "The dog chased the cat"?',
            options: [
                'The cat was chased by the dog.',
                'The cat chased the dog.',
                'The dog was chased by the dog.',
                'The cat is chased by the dog.'
            ],
            answer: 'The cat was chased by the dog.',
            explanation: 'In the passive voice, the object of the active sentence becomes the subject, the verb is changed to a form of "to be" + past participle, and the original subject becomes the object of a "by" phrase (optional).'
        },
        {
            id: 'eng4',
            question: 'Which word means "a feeling of intense pleasure or joy"?',
            options: ['Melancholy', 'Euphoria', 'Apathy', 'Disdain'],
            answer: 'Euphoria',
            explanation: 'Euphoria is a feeling or state of intense excitement and happiness. Melancholy is a feeling of pensive sadness, typically with no obvious cause. Apathy is lack of interest, enthusiasm, or concern. Disdain is the feeling that someone or something is unworthy of one\'s consideration or respect.'
        },
        {
            id: 'eng5',
            question: 'Choose the sentence with the correct punctuation.',
            options: [
                'She asked, "Are you coming?"',
                'She asked "Are you coming".',
                'She asked, Are you coming?',
                'She asked; "Are you coming?"'
            ],
            answer: 'She asked, "Are you coming?"',
            explanation: 'When quoting a direct question, a comma is typically used before the opening quotation mark, and the question mark goes inside the closing quotation mark.'
        }
    ],
    Mathematics: [
        {
            id: 'math1',
            question: 'What is the value of x in the equation 2x + 5 = 15?',
            options: ['5', '10', '2.5', '7.5'],
            answer: '5',
            explanation: 'Subtract 5 from both sides: 2x = 10. Divide by 2: x = 5.'
        },
        {
            id: 'math2',
            question: 'If a square has a perimeter of 36 units, what is the length of one side?',
            options: ['6 units', '9 units', '12 units', '18 units'],
            answer: '9 units',
            explanation: 'A square has 4 equal sides. Perimeter = 4 * side. So, 36 = 4 * side. Side = 36 / 4 = 9 units.'
        },
        {
            id: 'math3',
            question: 'What is the area of a triangle with a base of 10 cm and a height of 8 cm?',
            options: ['80 cm²', '40 cm²', '18 cm²', '36 cm²'],
            answer: '40 cm²',
            explanation: 'Area of a triangle = (1/2) * base * height. So, Area = (1/2) * 10 cm * 8 cm = 40 cm².'
        },
        {
            id: 'math4',
            question: 'Simplify the expression: 3(x + 2) - 2x',
            options: ['x + 2', 'x + 6', '5x + 6', 'x - 2'],
            answer: 'x + 6',
            explanation: 'Distribute the 3: 3x + 6 - 2x. Combine like terms: (3x - 2x) + 6 = x + 6.'
        },
        {
            id: 'math5',
            question: 'What is 15% of 200?',
            options: ['15', '20', '30', '45'],
            answer: '30',
            explanation: '15% of 200 can be calculated as (15/100) * 200 = 0.15 * 200 = 30.'
        }
    ],
    Physics: [
        {
            id: 'phy1',
            question: 'What is the SI unit of force?',
            options: ['Joule', 'Watt', 'Newton', 'Pascal'],
            answer: 'Newton',
            explanation: 'The Newton (N) is the SI unit of force, defined as the force needed to accelerate one kilogram of mass by one meter per second squared.'
        },
        {
            id: 'phy2',
            question: 'Which of Newton\'s Laws states that for every action, there is an equal and opposite reaction?',
            options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravity'],
            answer: 'Third Law',
            explanation: 'Newton\'s Third Law of Motion states that for every action (force) in nature there is an equal and opposite reaction. If object A exerts a force on object B, then object B also exerts an equal and opposite force on object A.'
        },
        {
            id: 'phy3',
            question: 'What is the formula for calculating work done?',
            options: ['Force × Distance', 'Mass × Acceleration', 'Power / Time', 'Energy / Time'],
            answer: 'Force × Distance',
            explanation: 'Work done (W) is defined as the product of the force (F) applied to an object and the distance (d) over which the force is applied in the direction of the force: W = F × d.'
        },
        {
            id: 'phy4',
            question: 'What is the speed of light in a vacuum?',
            options: ['3 x 10^5 m/s', '3 x 10^8 m/s', '3 x 10^3 m/s', '3 x 10^6 m/s'],
            answer: '3 x 10^8 m/s',
            explanation: 'The speed of light in a vacuum, denoted by c, is exactly 299,792,458 meters per second, which is approximately 3 x 10^8 m/s.'
        },
        {
            id: 'phy5',
            question: 'Which type of energy is stored in a stretched spring?',
            options: ['Kinetic energy', 'Thermal energy', 'Chemical energy', 'Potential energy'],
            answer: 'Potential energy',
            explanation: 'Potential energy is stored energy. A stretched or compressed spring stores elastic potential energy due to its deformation.'
        }
    ],
    SAT: [
        {
            id: 'sat1',
            question: 'If 3x - y = 12, what is the value of (8^x) / (2^y)?',
            options: ['2^12', '4^4', '8^2', '2^36'],
            answer: '2^12',
            explanation: 'Given 3x - y = 12. We want to find (8^x) / (2^y). Rewrite 8 as 2^3: ( (2^3)^x ) / (2^y) = (2^(3x)) / (2^y). Using exponent rules, this simplifies to 2^(3x - y). Since 3x - y = 12, the expression is 2^12.'
        },
        {
            id: 'sat2',
            question: 'A car travels at an average speed of 50 miles per hour. How long will it take to travel 225 miles?',
            options: ['3 hours', '3.5 hours', '4 hours', '4.5 hours'],
            answer: '4.5 hours',
            explanation: 'Time = Distance / Speed. Time = 225 miles / 50 mph = 4.5 hours.'
        },
        {
            id: 'sat3',
            question: 'In a certain sequence, each term after the first is 3 more than twice the previous term. If the first term is 2, what is the third term?',
            options: ['7', '17', '37', '42'],
            answer: '17',
            explanation: 'First term = 2. Second term = 2 * 2 + 3 = 7. Third term = 2 * 7 + 3 = 14 + 3 = 17.'
        },
        {
            id: 'sat4',
            question: 'If (x + 1)/(x - 1) = 5, what is the value of x?',
            options: ['1', '1.5', '2', '2.5'],
            answer: '1.5',
            explanation: 'Multiply both sides by (x - 1): x + 1 = 5(x - 1). Distribute the 5: x + 1 = 5x - 5. Subtract x from both sides: 1 = 4x - 5. Add 5 to both sides: 6 = 4x. Divide by 4: x = 6/4 = 1.5.'
        },
        {
            id: 'sat5',
            question: 'A recipe calls for 2 cups of flour for every 3 cups of sugar. If you use 8 cups of flour, how many cups of sugar do you need?',
            options: ['9 cups', '12 cups', '16 cups', '24 cups'],
            answer: '12 cups',
            explanation: 'The ratio of flour to sugar is 2:3. If you use 8 cups of flour, which is 4 times 2 cups, you need 4 times 3 cups of sugar. So, 3 * 4 = 12 cups of sugar.'
        }
    ],
    Biology: [
        {
            id: 'bio1',
            question: 'What is the powerhouse of the cell?',
            options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
            answer: 'Mitochondria',
            explanation: 'Mitochondria are often called the "powerhouses" of the cell because they generate most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.'
        },
        {
            id: 'bio2',
            question: 'Which of the following is the primary site of photosynthesis in plants?',
            options: ['Root', 'Stem', 'Flower', 'Leaf'],
            answer: 'Leaf',
            explanation: 'Leaves are the primary sites for photosynthesis, as they contain chloroplasts, which are the organelles where photosynthesis takes photosynthesis takes place.'
        },
        {
            id: 'bio3',
            question: 'What is the basic unit of heredity?',
            options: ['Cell', 'Tissue', 'Organ', 'Gene'],
            answer: 'Gene',
            explanation: 'A gene is the basic physical and functional unit of heredity. Genes are made up of DNA.'
        },
        {
            id: 'bio4',
            question: 'Which blood type is considered the universal recipient?',
            options: ['A', 'B', 'AB', 'O'],
            answer: 'AB',
            explanation: 'Individuals with AB blood type are considered universal recipients because they have both A and B antigens on their red blood cells and no anti-A or anti-B antibodies in their plasma, meaning they can receive blood from any ABO type.'
        },
        {
            id: 'bio5',
            question: 'What process do plants use to convert light energy into chemical energy?',
            options: ['Respiration', 'Transpiration', 'Photosynthesis', 'Fermentation'],
            answer: 'Photosynthesis',
            explanation: 'Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight into chemical energy.'
        }
    ],
    Chemistry: [
        {
            id: 'chem1',
            question: 'What is the chemical symbol for water?',
            options: ['H2O2', 'CO2', 'H2O', 'O2'],
            answer: 'H2O',
            explanation: 'Water is a chemical compound with the chemical formula H2O, meaning that its molecule has two hydrogen atoms and one oxygen atom.'
        },
        {
            id: 'chem2',
            question: 'Which element has the atomic number 6?',
            options: ['Oxygen', 'Nitrogen', 'Carbon', 'Boron'],
            answer: 'Carbon',
            explanation: 'Carbon is a chemical element with the symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds.'
        },
            {
            id: 'chem3',
            question: 'What is the pH of a neutral solution at 25°C?',
            options: ['0', '7', '14', 'Depends on the solution'],
            answer: '7',
            explanation: 'A neutral solution (like pure water) at 25°C has a pH of 7. Solutions with a pH less than 7 are acidic, and solutions with a pH greater than 7 are basic (alkaline).'
        },
        {
            id: 'chem4',
            question: 'Which type of bond involves the sharing of electron pairs between atoms?',
            options: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Hydrogen bond'],
            answer: 'Covalent bond',
            explanation: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms. These electron pairs are known as shared pairs or bonding pairs.'
        },
        {
            id: 'chem5',
            question: 'What is the most abundant gas in Earth\'s atmosphere?',
            options: ['Oxygen', 'Carbon Dioxide', 'Argon', 'Nitrogen'],
            answer: 'Nitrogen',
            explanation: 'Nitrogen (N2) makes up about 78% of Earth\'s atmosphere, making it the most abundant gas.'
        }
    ]
};

// --- Functions ---

/**
 * Controls which main page is displayed and manages page history for the back button.
 * @param {string} pageId - The ID of the page container to display.
 * @param {boolean} [isBack=false] - True if the navigation is from the back button.
 */
function showPage(pageId, isBack = false) {
    if (!isBack && currentPageId !== pageId) {
        pageHistory.push(currentPageId);
    }
    currentPageId = pageId;

    const pages = ['homeContainer', 'testContainer', 'preSubmitReviewContainer', 'summaryContainer', 'notesInterfaceContainer', 'flashcardsInterfaceContainer'];
    pages.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = (id === pageId) ? 'flex' : 'none';
        }
    });

    // Hide all specific modals when changing main pages
    messageModalOverlay.style.display = 'none';
    deleteNoteConfirmModal.style.display = 'none';
    deleteFlashcardConfirmModal.style.display = 'none';
    unifiedAiModalOverlay.style.display = 'none';
    testModeModal.style.display = 'none';
    newFolderModal.style.display = 'none'; // New: Hide folder modal
    newSetModal.style.display = 'none'; // New: Hide set modal
    newFlashcardModal.style.display = 'none'; // Ensure flashcard modal is hidden

    mainHeader.style.display = (pageId !== 'homeContainer') ? 'flex' : 'none';
    testProgressFooter.style.display = (pageId === 'testContainer') ? 'flex' : 'none';

    // Manage FAB visibility based on current page
    if (pageId === 'notesInterfaceContainer' || pageId === 'flashcardsInterfaceContainer') {
        addNoteFab.style.display = (pageId === 'notesInterfaceContainer') ? 'flex' : 'none';
        addFlashcardFab.style.display = (pageId === 'flashcardsInterfaceContainer') ? 'flex' : 'none';
    } else {
        addNoteFab.style.display = 'none';
        addFlashcardFab.style.display = 'none';
    }
    // Ensure FAB options are hidden when changing main pages
    fabOptionsContainer.classList.remove('active');
    flashcardFabOptionsContainer.classList.remove('active');
}


/**
 * Handles the selection of a subject on the home page.
 * @param {string} subject - The subject selected.
 */
function selectSubject(subject) {
    subjectItems.forEach(item => item.classList.remove('active-subject'));
    const selectedItem = document.querySelector(`.subject-item[data-subject="${subject}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active-subject');
        currentSubject = subject;
        testModeModal.style.display = 'flex';
    }
}

/**
 * Confirms the selected test mode and starts the test.
 */
function confirmTestMode() {
    const selectedMode = document.querySelector('input[name="testMode"]:checked');
    if (!selectedMode) return;
    currentTestMode = selectedMode.value;
    testModeModal.style.display = 'none';
    startTest(currentSubject, currentTestMode); // Call startTest with confirmed subject and mode
}

/**
 * Function to start the test
 * @param {string} subject - The subject for the test.
 * @param {string} mode - The test mode ('practice' or 'test').
 */
function startTest(subject, mode) {
    if (!allQuestions[subject]) {
        console.error("Subject not found:", subject);
        showMessageModal("Selected subject not found. Please try again.", null, null, false);
        showPage('homeContainer'); // Go back to home if subject is invalid
        return;
    }

    currentSubject = subject;
    currentTestMode = mode;
    questions = [...allQuestions[currentSubject]];
    userAnswers = {}; // Changed to object for easier lookup by question ID
    flaggedQuestions = new Set();
    // currentQuestionIndex = 0; // Not needed for single page display
    renderAllQuestions(); // Render all questions instead of one
    // renderSidebar(); // Removed
    renderProgressFooter();
    showPage('testContainer');
}

/**
 * Generates HTML for a single question block.
 * @param {object} q - The question object.
 * @param {number} index - The index of the question (for display number).
 * @returns {string} The HTML string for the question block.
 */
function _getQuestionHtml(q, index) {
    const isFlagged = flaggedQuestions.has(q.id);
    const flagSVG = isFlagged ? `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ef4444'%3E%3Cpath d='M4.5 3A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21H5v-2h14v2h.5a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3h-15z'/%3E%3C/svg%3E` : `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3E%3Cpath d='M4.5 3A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21H5v-2h14v2h.5a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3h-15z'/%3E%3C/svg%3E`;

    let explanationBoxHtml = '';
    if (currentTestMode === 'practice' && userAnswers.hasOwnProperty(q.id)) {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        explanationBoxHtml = `
            <div class="immediate-explanation-box" style="display: block;">
                <strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong>
                ${isCorrect ? '' : `The correct answer is: ${q.answer}.<br>`}
                ${q.explanation}
            </div>
        `;
    } else {
        explanationBoxHtml = `<div class="immediate-explanation-box" style="display: none;"></div>`;
    }

    return `
        <div class="question-block" id="question-${q.id}">
            <div class="question-header">
                <span class="question-number">Question ${index + 1}</span>
                <img class="flag-icon ${isFlagged ? 'flagged' : ''}" src="${flagSVG}" alt="Flag" data-question-id="${q.id}">
            </div>
            <p class="question-text">${q.question}</p>
            <div class="options-list">
                ${q.options.map(option => {
                    let optionClass = '';
                    if (currentTestMode === 'practice' && userAnswers.hasOwnProperty(q.id)) {
                        if (option === q.answer) {
                            optionClass = 'correct-option-highlight'; // Always highlight correct in practice
                        }
                        if (userAnswers[q.id] === option && userAnswers[q.id] !== q.answer) {
                            optionClass = 'incorrect-chosen-highlight'; // Highlight user's incorrect choice
                        } else if (userAnswers[q.id] === option && userAnswers[q.id] === q.answer) {
                            optionClass = 'correct-option-highlight'; // Highlight user's correct choice
                        }
                    } else if (userAnswers[q.id] === option) {
                         optionClass = 'selected-option'; // For test mode or initial selection
                    }
                    return `
                        <label for="${q.id}-${option.replace(/\s/g, '-')}" class="${optionClass}">
                            <input type="radio" name="question-${q.id}" id="${q.id}-${option.replace(/\s/g, '-')}" value="${option}" ${userAnswers[q.id] === option ? 'checked' : ''}>
                            ${option}
                        </label>
                    `;
                }).join('')}
            </div>
            ${explanationBoxHtml}
        </div>
    `;
}

/**
 * Renders all questions for the selected subject on a single page.
 */
function renderAllQuestions() {
    questionsContainer.innerHTML = ''; // Clear previous questions
    questions.forEach((q, index) => {
        const questionHtml = _getQuestionHtml(q, index);
        questionsContainer.insertAdjacentHTML('beforeend', questionHtml);
    });

    // Attach event listeners after all questions are in DOM
    questions.forEach(q => {
        const questionBlock = document.getElementById(`question-${q.id}`);
        if (questionBlock) {
            const flagIcon = questionBlock.querySelector('.flag-icon');
            if (flagIcon) {
                flagIcon.addEventListener('click', () => toggleFlag(q.id, flagIcon));
            }

            questionBlock.querySelectorAll('input[type="radio"]').forEach(radio => {
                radio.addEventListener('change', () => handleAnswerChange(radio.name.replace('question-', ''), radio.value, radio));
            });
        }
    });

    // Ensure progress footer is rendered/updated
    renderProgressFooter();
}


/**
 * Handles a user's answer selection.
 */
function handleAnswerChange(questionId, selectedAnswer, radioInput) {
    userAnswers[questionId] = selectedAnswer;
    updateProgressFooterStatus(questionId, 'answered');

    const questionBlock = document.getElementById(`question-${questionId}`);
    const optionsList = questionBlock.querySelector('.options-list');
    const question = questions.find(q => q.id === questionId);

    // Remove 'selected-option', 'correct-option-highlight', 'incorrect-chosen-highlight' classes from all labels for this question
    optionsList.querySelectorAll('label').forEach(label => {
        label.classList.remove('selected-option', 'correct-option-highlight', 'incorrect-chosen-highlight');
    });

    // Add 'selected-option' class to the currently selected label for all modes
    radioInput.parentElement.classList.add('selected-option');

    if (currentTestMode === 'practice') {
        // Reapply all highlights based on the new selection for practice mode
        optionsList.querySelectorAll('label').forEach(label => {
            const input = label.querySelector('input');
            if (input.value === question.answer) {
                label.classList.add('correct-option-highlight'); // Highlight correct option
            }
            if (userAnswers[questionId] === input.value && userAnswers[questionId] !== question.answer) {
                label.classList.add('incorrect-chosen-highlight'); // Highlight user's incorrect choice
            } else if (userAnswers[questionId] === input.value && userAnswers[questionId] === question.answer) {
                label.classList.add('correct-option-highlight'); // Highlight user's correct choice
            }
        });
        showImmediateFeedback(questionId);
    }
}

/**
 * Shows immediate feedback for 'practice' mode.
 * @param {string} questionId - The ID of the question.
 */
function showImmediateFeedback(questionId) {
    const question = questions.find(q => q.id === questionId);
    const userAnswer = userAnswers[questionId];
    const questionBlock = document.getElementById(`question-${questionId}`);
    let immediateExplanationBox = questionBlock.querySelector('.immediate-explanation-box');

    // Ensure the explanation box exists and is visible
    if (!immediateExplanationBox) {
        immediateExplanationBox = document.createElement('div');
        immediateExplanationBox.className = 'immediate-explanation-box';
        questionBlock.appendChild(immediateExplanationBox);
    }
    immediateExplanationBox.style.display = 'block';

    if (userAnswer) {
        if (userAnswer === question.answer) {
            // Explanation is hidden for correct answers as per previous logic, just add text for "Correct!"
            immediateExplanationBox.innerHTML = `<strong>Correct!</strong><br>${question.explanation}`;
            // If the user wants to see the explanation even for correct answers, remove the next line:
            // immediateExplanationBox.style.display = 'none';
        } else {
            immediateExplanationBox.innerHTML = `
                <strong>Incorrect!</strong> The correct answer is: ${question.answer}.<br>${question.explanation}
            `;
        }
    } else {
        immediateExplanationBox.style.display = 'none'; // Hide if no answer
    }
}

/**
 * Toggles the flagged status of a question.
 */
function toggleFlag(questionId, iconElement) {
    const flaggedSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ef4444'%3E%3Cpath d='M4.5 3A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21H5v-2h14v2h.5a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3h-15z'/%3E%3C/svg%3E`;
    const unflaggedSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3E%3Cpath d='M4.5 3A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21H5v-2h14v2h.5a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3h-15z'/%3E%3C/svg%3E`;

    if (flaggedQuestions.has(questionId)) {
        flaggedQuestions.delete(questionId);
        iconElement.src = unflaggedSVG;
        iconElement.classList.remove('flagged');
    } else {
        flaggedQuestions.add(questionId);
        iconElement.src = flaggedSVG;
        iconElement.classList.add('flagged');
    }
    // No sidebar update needed for status here
}

/** Renders the progress boxes in the footer. */
function renderProgressFooter() {
    progressBoxesContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const box = document.createElement('div');
        box.className = 'progress-box';
        box.textContent = index + 1;
        box.dataset.questionId = q.id;
        if (userAnswers.hasOwnProperty(q.id)) box.classList.add('answered');
        box.addEventListener('click', () => {
            // When clicked, scroll to the question on the same page
            scrollToQuestion(q.id);
        });
        progressBoxesContainer.appendChild(box);
    });
}

/**
 * Updates the progress box status.
 */
function updateProgressFooterStatus(questionId, status) {
    const box = progressBoxesContainer.querySelector(`.progress-box[data-question-id="${questionId}"]`);
    if (box) box.classList.toggle('answered', status === 'answered');
}

// Removed nextQuestion and prevQuestion functions

/**
 * Scrolls to a specific question.
 */
function scrollToQuestion(questionId) {
    const questionElement = document.getElementById(`question-${questionId}`);
    if (questionElement) {
        questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        questionElement.style.backgroundColor = '#e0f2fe';
        setTimeout(() => { questionElement.style.backgroundColor = ''; }, 1500);
    }
}

/**
 * Shows the pre-submit review page.
 */
function populatePreSubmitReview() {
    preSubmitFlaggedList.innerHTML = '';
    preSubmitUnansweredList.innerHTML = '';

    let hasFlagged = false;
    let hasUnanswered = false;

    questions.forEach((q, index) => {
        if (flaggedQuestions.has(q.id)) {
            hasFlagged = true;
            appendReviewItem(preSubmitFlaggedList, q, index, 'flagged');
        }
        if (!userAnswers.hasOwnProperty(q.id)) {
            hasUnanswered = true;
            appendReviewItem(preSubmitUnansweredList, q, index, 'unanswered');
        }
    });

    // Ensure sections are correctly identified by ID in HTML for display toggle
    const flaggedSection = document.getElementById('flaggedQuestionsSection');
    if (flaggedSection) {
        flaggedSection.style.display = hasFlagged ? 'block' : 'none';
    } else {
        console.error("Element with ID 'flaggedQuestionsSection' not found.");
    }

    const unansweredSection = document.getElementById('unansweredQuestionsSection');
    if (unansweredSection) {
        unansweredSection.style.display = hasUnanswered ? 'block' : 'none';
    } else {
        console.error("Element with ID 'unansweredQuestionsSection' not found.");
    }
}

/**
 * Appends a review item to a list.
 */
function appendReviewItem(listElement, question, index, status) {
    const row = document.createElement('div');
    row.className = 'review-table-row';
    row.innerHTML = `
        <div class="review-table-cell review-table-cell-number">${index + 1}</div>
        <div class="review-table-cell review-table-cell-text">${question.question}</div>
        <div class="review-table-cell review-table-cell-status">
            <span class="status-badge ${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
            <button class="review-link" data-question-id="${question.id}">Review</button>
        </div>
    `;
    listElement.appendChild(row);

    row.querySelector('.review-link').addEventListener('click', () => {
        // Now that all questions are on one page, just scroll to it
        showPage('testContainer');
        scrollToQuestion(question.id);
    });
}

/**
 * Generates and displays the final test summary.
 */
function generateSummary() {
    let correctAnswers = 0;
    allQuestionsReviewList.innerHTML = '';

    questions.forEach((q, index) => {
        const isCorrect = userAnswers[q.id] === q.answer;
        if (isCorrect) correctAnswers++;

        const row = document.createElement('div');
        row.className = 'review-table-row summary-question-item';
        row.innerHTML = `
            <div class="review-table-cell review-table-cell-number">${index + 1}</div>
            <div class="review-table-cell review-table-cell-text">${q.question}</div>
            <div class="review-table-cell review-table-cell-status">
                <span class="status-badge ${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? 'Correct' : 'Incorrect'}</span>
                <button class="review-link" data-question-id="${q.id}">Review</button>
            </div>
        `;
    allQuestionsReviewList.appendChild(row);
    row.querySelector('.review-link').addEventListener('click', () => showFullQuestionReview(q.id));
    });

    finalScoreDisplay.textContent = `Your Score: ${correctAnswers}/${questions.length}`;
    showPage('summaryContainer');
}

/**
 * Displays a detailed review of a single question.
 */
function showFullQuestionReview(questionId) {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const userAnswer = userAnswers[question.id];
    const isCorrect = userAnswer === question.answer;

    const fullReviewHtml = `
        <div class="summary-question-item-full">
            <p class="question-number">Question ${questions.indexOf(question) + 1}</p>
            <p class="question-text-full">${question.question}</p>
            <div class="options-review-list">
                ${question.options.map(option => `
                    <div class="option-review ${option === question.answer ? 'correct-option' : ''} ${userAnswer === option && !isCorrect ? 'user-chosen-incorrect' : ''}">
                        ${option}
                        ${userAnswer === option ? '<span style="font-weight: bold;"> (Your Answer)</span>' : ''}
                        ${option === question.answer ? '<span style="font-weight: bold;"> (Correct Answer)</span>' : ''}
                    </div>
                `).join('')}
            </div>
            <div class="explanation-box"><strong>Explanation:</strong> ${question.explanation}</div>
            <button class="action-button-summary ai-explanation-button" data-question-id="${question.id}" style="margin-top: 1rem;">Get AI Explanation</button>
            <div class="ai-explanation-container" id="aiExplanation-${question.id}" style="display:none;">
                <div class="loader ai-explanation-loader"></div>
                <p class="ai-explanation-text"></p>
            </div>
        </div>
    `;

    summaryContainer.innerHTML = `
        <button class="action-button-summary" id="backToSummaryButton" style="align-self: flex-start; margin-bottom: 1rem;">Back to Summary</button>
        ${fullReviewHtml}
    `;

    document.getElementById('backToSummaryButton').addEventListener('click', generateSummary);
    summaryContainer.querySelector('.ai-explanation-button').addEventListener('click', () => getAiExplanation(question.id));
}

/**
 * Fetches an AI explanation for a question.
 */
async function getAiExplanation(questionId) {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const container = document.getElementById(`aiExplanation-${questionId}`);
    const loader = container.querySelector('.ai-explanation-loader');
    const textElement = container.querySelector('.ai-explanation-text');

    container.style.display = 'block';
    loader.style.display = 'block';
    textElement.textContent = '';

    const prompt = `Explain why "${question.answer}" is the correct answer for the question: "${question.question}". Keep the explanation clear and concise for a student.`;

    try {
        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
            textElement.textContent = result.candidates[0].content.parts[0].text;
        } else {
            textElement.textContent = "Could not retrieve AI explanation.";
        }
    } catch (error) {
        textElement.textContent = "Error fetching AI explanation.";
        console.error("Error in getAiExplanation:", error);
    } finally {
        loader.style.display = 'none';
    }
}

/** Generic Message/Confirmation Modal Functions */
function showMessageModal(message, onConfirmCallback = null, onCancelCallback = null, isConfirm = true) {
    messageModalText.textContent = message;
    // Dynamically create buttons within the modal
    const messageModalButtons = messageModalOverlay.querySelector('.message-modal-buttons');
    messageModalButtons.innerHTML = ''; // Clear existing buttons
    currentMessageModalCallback = onConfirmCallback; // Store confirm callback

    if (isConfirm) {
        const yesButton = document.createElement('button');
        yesButton.className = 'btn-yes';
        yesButton.textContent = 'Yes';
        yesButton.addEventListener('click', () => {
            if (currentMessageModalCallback) currentMessageModalCallback();
            hideMessageModal();
        });

        const noButton = document.createElement('button');
        noButton.className = 'btn-no';
        noButton.textContent = 'No';
        noButton.addEventListener('click', () => {
            if (onCancelCallback) onCancelCallback();
            hideMessageModal();
        });
        messageModalButtons.appendChild(yesButton);
        messageModalButtons.appendChild(noButton);
    } else {
        const okButton = document.createElement('button');
        okButton.className = 'btn-yes';
        okButton.textContent = 'OK';
        okButton.addEventListener('click', hideMessageModal);
        messageModalButtons.appendChild(okButton);
    }

    messageModalOverlay.style.display = 'flex';
}

function hideMessageModal() {
    messageModalOverlay.style.display = 'none';
    currentMessageModalCallback = null;
}

// --- AI Chat Functions ---
async function sendMessageToGemini(message, isImage = false) {
    chatInitialState.style.display = 'none';

    const userMessageElem = document.createElement('div');
    userMessageElem.className = 'chat-message user';
    userMessageElem.textContent = message;
    chatMessagesContainer.appendChild(userMessageElem);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // Show loading indicator
    aiLoadingIndicator.style.display = 'flex';
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    let aiResponseText = "";

    // Check for "Formula 1" or "F1" in the message (case-insensitive)
    if (message.toLowerCase().includes("formula 1") || message.toLowerCase().includes("f1")) {
        aiResponseText = `Formula One (F1) is the highest class of international single-seater auto racing, officially known as the FIA Formula One World Championship. It's considered the pinnacle of motorsport due to its combination of cutting-edge technology, extreme speed, and global competition.

Key Features of Formula One:
🚗 The Cars:
Single-seater: Only one driver per car.
Open-wheel: Wheels are outside the car body.
High Performance: Speeds over 350 km/h (217 mph).
Hybrid Engines: Since 2014, F1 cars use hybrid power units, combining turbocharged V6 engines with advanced energy recovery systems.
Made from carbon fiber and designed for maximum aerodynamic efficiency.
🌍 The Championship:
Annual Series: Usually from March to December.
20+ Races (Grand Prix): Held worldwide (Monaco, Italy, Japan, USA, etc.).
Teams and Drivers: Each team usually fields 2 cars. Famous teams include Ferrari, Mercedes, Red Bull Racing, and McLaren.
Points System: Drivers and teams accumulate points based on finishing positions. The driver and team with the most points win the Drivers' Championship and Constructors' Championship, respectively.
🏁 Key Elements of the Sport:
Qualifying: Decides the starting order for the race.
Pit Stops: For tire changes or repairs during the race.
Tire Strategy: Choosing the right tire for weather and track conditions is crucial.
Race Strategy: Involves fuel management, overtaking tactics, and safety car responses.
Technology Race: Teams spends millions developing faster, more reliable cars.
🏆 Famous Figures in F1 History:
Michael Schumacher
Lewis Hamilton
Ayrton Senna
Sebastian Vettel
Max Verstappen
👑 Why It's Popular:
Incredible engineering.
Intense global rivalries.
Glamorous race locations.
Unpredictable races and rivalries.
A mix of human skill and technological brilliance.
If you'd like, I can explain the rules, team structures, car technology, or the history of Formula One in more depth!`;
    } else {
        const parts = [{ text: message }];
        if (isImage && uploadedImageBase64) {
            parts.push({ inlineData: { mimeType: "image/png", data: uploadedImageBase64.split(',')[1] } });
        }

        const payload = { contents: [{ role: "user", parts }] };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            aiResponseText = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get a response.";
        } catch (error) {
            textElement.textContent = "Error fetching AI explanation.";
            console.error("Error sending message to Gemini:", error);
            aiResponseText = "Error connecting to AI.";
        }
    }

    const aiMessageElem = document.createElement('div');
    aiMessageElem.className = 'chat-message ai';
    aiMessageElem.textContent = aiResponseText;
    chatMessagesContainer.appendChild(aiMessageElem);

    // Hide loading indicator AFTER the AI message is appended
    aiLoadingIndicator.style.display = 'none';

    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    uploadedImageBase64 = null; // Reset after use
    imagePreviewContainer.style.display = 'none';
}

function analyzeImageWithGemini(base64Image) {
    uploadedImageBase64 = base64Image;
    chatInput.value = "What is in this image?";
    chatInput.focus();
}

// --- Notes Interface Functions ---
function showNotesInterface() {
    showPage('notesInterfaceContainer');
    loadNotes(); // Load notes when interface is shown
}

function loadNotes() {
    const storedNotes = localStorage.getItem('eduBoostNotes');
    userNotes = storedNotes ? JSON.parse(storedNotes) : [];
    renderNotes();
}

function saveNotes() {
    localStorage.setItem('eduBoostNotes', JSON.stringify(userNotes));
}

function renderNotes() {
    notesListContainer.innerHTML = '';
    if (userNotes.length === 0) {
        notesListContainer.innerHTML = '<p style="text-align: center; color: #718096; margin-top: 2rem;">No notes yet. Click the "+" button to add one!</p>';
        if (document.body.classList.contains('dark-mode')) {
            notesListContainer.querySelector('p').style.color = '#a0aec0';
        }
        return;
    }
    userNotes.forEach(note => createNoteCard(note));
}

function createNoteCard(note) {
    const noteCard = document.createElement('div');
    noteCard.className = 'note-card';
    noteCard.dataset.noteId = note.id;

    const titleInput = document.createElement('textarea');
    titleInput.className = 'note-card-title';
    titleInput.placeholder = 'Title';
    titleInput.value = note.title || '';
    titleInput.rows = 1;
    titleInput.addEventListener('input', (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
        note.title = e.target.value;
        saveNotes();
    });
    noteCard.appendChild(titleInput);
    setTimeout(() => { titleInput.style.height = `${titleInput.scrollHeight}px`; }, 0);

    if (note.type === 'text') {
        const textarea = document.createElement('textarea');
        textarea.className = 'note-card-textarea';
        textarea.placeholder = 'Take a note...';
        textarea.value = note.content || '';
        textarea.addEventListener('input', (e) => {
            note.content = e.target.value;
            saveNotes();
        });
        noteCard.appendChild(textarea);
    } else if (note.type === 'checklist') {
        const checklistContainer = document.createElement('div');
        checklistContainer.className = 'checklist-container';
        (note.content || []).forEach(item => {
            createChecklistItem(checklistContainer, item, note.id);
        });
        noteCard.appendChild(checklistContainer);

        const addContainer = document.createElement('div');
        addContainer.className = 'add-checklist-item-container';
        const newItemInput = document.createElement('input');
        newItemInput.type = 'text';
        newItemInput.placeholder = 'List item';
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.addEventListener('click', () => addChecklistItem(newItemInput, checklistContainer, note.id));
        newItemInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addChecklistItem(newItemInput, checklistContainer, note.id);
        });
        addContainer.appendChild(newItemInput);
        addContainer.appendChild(addButton);
        noteCard.appendChild(addContainer);
    }

    // Add a dedicated delete button
    const deleteNoteButton = document.createElement('button');
    deleteNoteButton.className = 'delete-note-button';
    deleteNoteButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.519M19.5 1.5a.75.75 0 00-1.5 0v2.25H6.75V1.5a.75.75 0 00-1.5 0v2.25H2.25c-.414 0-.75.336-.75.75v.256a46.41 46.41 0 001.99 9.804 50.803 50.803 0 003.006 4.032.75.75 0 00.75 0 50.803 50.803 0 003.006-4.032 46.41 46.41 0 001.99-9.804v-.256c0-.414-.336-.75-.75-.75H16.5zm-11.25 3V2.25h-.75a.75.75 0 00-.75.75v.227a48.816 48.816 0 013.878.519M12 6.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V7.5a.75.75 0 01.75-.75zM12 10.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>
    `;
    deleteNoteButton.title = 'Delete Note';
    deleteNoteButton.addEventListener('click', () => {
        showDeleteNoteConfirm(note.id);
    });
    noteCard.appendChild(deleteNoteButton);

    notesListContainer.appendChild(noteCard);
}

function addTextNote() {
    const newNote = { id: crypto.randomUUID(), type: 'text', title: '', content: '' };
    userNotes.unshift(newNote); // Add to the beginning
    saveNotes();
    renderNotes();
}

function addChecklistNote() {
    const newNote = { id: crypto.randomUUID(), type: 'checklist', title: '', content: [] };
    userNotes.unshift(newNote); // Add to the beginning
    saveNotes();
    renderNotes();
}

function createChecklistItem(container, item, noteId) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'checklist-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    if (item.completed) itemDiv.classList.add('completed');
    checkbox.addEventListener('change', () => {
        item.completed = checkbox.checked;
        itemDiv.classList.toggle('completed', checkbox.checked);
        saveNotes();
    });

    const textSpan = document.createElement('span');
    textSpan.className = 'item-text';
    textSpan.textContent = item.text;
    textSpan.contentEditable = true;
    textSpan.addEventListener('blur', () => {
        item.text = textSpan.textContent;
        saveNotes();
    });
    textSpan.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            textSpan.blur();
        }
    });


    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-item-button';
    deleteButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.519M19.5 1.5a.75.75 0 00-1.5 0v2.25H6.75V1.5a.75.75 0 00-1.5 0v2.25H2.25c-.414 0-.75.336-.75.75v.256a46.41 46.41 0 001.99 9.804 50.803 50.803 0 003.006 4.032.75.75 0 00.75 0 50.803 50.803 0 003.006-4.032 46.41 46.41 0 001.99-9.804v-.256c0-.414-.336-.75-.75-.75H16.5zm-11.25 3V2.25h-.75a.75.75 0 00-.75.75v.227a48.816 48.816 0 013.878.519M12 6.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V7.5a.75.75 0 01.75-.75zM12 10.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>
    `;
    deleteButton.addEventListener('click', () => {
        const note = userNotes.find(n => n.id === noteId);
        if (note) {
            // Find the index of the item to delete
            const itemIndex = note.content.findIndex(i => i.text === item.text);
            if (itemIndex > -1) {
                note.content.splice(itemIndex, 1);
                saveNotes();
                renderNotes(); // Re-render the specific note card or all notes
            }
        }
    });

    itemDiv.appendChild(checkbox);
    itemDiv.appendChild(textSpan);
    itemDiv.appendChild(deleteButton);
    container.appendChild(itemDiv);
}

function addChecklistItem(input, container, noteId) {
    const text = input.value.trim();
    if (text) {
        const note = userNotes.find(n => n.id === noteId);
        if (note) {
            note.content.push({ text, completed: false });
            saveNotes();
            renderNotes(); // Re-render all notes to update the specific note card
            input.value = '';
        }
    }
}

function showDeleteNoteConfirm(noteId) {
    noteToDeleteId = noteId;
    deleteNoteConfirmModal.style.display = 'flex';
}

function deleteNote() {
    if (noteToDeleteId) {
        userNotes = userNotes.filter(note => note.id !== noteToDeleteId);
        saveNotes();
        renderNotes();
        noteToDeleteId = null;
    }
    deleteNoteConfirmModal.style.display = 'none';
}

// --- Flashcards Interface Functions (updated for Firestore and hierarchy) ---

/**
 * Entry point for the flashcards interface.
 * Initializes Firestore listeners and displays folders.
 */
async function showFlashcardsInterface() {
    showPage('flashcardsInterfaceContainer');
    currentFlashcardView = FLASHCARD_VIEW_FOLDERS;
    currentFolder = null;
    currentSet = null;
    updateFlashcardUI(); // Show folders initially
    await loadFolders(); // Load and display folders from Firestore
}

/**
 * Updates the visibility of flashcard sections and FAB options based on current view.
 */
function updateFlashcardUI() {
    flashcardFoldersSection.style.display = 'none';
    flashcardSetsSection.style.display = 'none';
    flashcardsInSection.style.display = 'none';
    flashcardBreadcrumbs.style.display = 'flex'; // Always show breadcrumbs in flashcard section

    // Hide all FAB options initially
    flashcardFabOptionsContainer.classList.remove('active');
    addNewFolderButton.style.display = 'none';
    addNewSetButton.style.display = 'none';
    addNewFlashcardButtonFromFab.style.display = 'none';

    switch (currentFlashcardView) {
        case FLASHCARD_VIEW_FOLDERS:
            flashcardsHeaderTitle.textContent = 'My Flashcards';
            flashcardFoldersSection.style.display = 'grid'; // Use grid for folder display
            addNewFolderButton.style.display = 'flex';
            renderBreadcrumbs();
            break;
        case FLASHCARD_VIEW_SETS:
            flashcardsHeaderTitle.textContent = currentFolder ? currentFolder.name : 'Flashcard Sets';
            flashcardSetsSection.style.display = 'grid'; // Use grid for set display
            addNewSetButton.style.display = 'flex';
            renderBreadcrumbs();
            break;
        case FLASHCARD_VIEW_CARDS:
            flashcardsHeaderTitle.textContent = currentSet ? currentSet.title : 'Flashcards';
            flashcardsInSection.style.display = 'flex'; // Use flex for card display
            addNewFlashcardButtonFromFab.style.display = 'flex';
            renderBreadcrumbs();
            break;
    }
}

/**
 * Renders breadcrumbs for navigation within flashcards.
 */
function renderBreadcrumbs() {
    flashcardBreadcrumbs.innerHTML = '';
    const homeSpan = document.createElement('span');
    homeSpan.textContent = 'Home';
    homeSpan.classList.add('current'); // Initially current
    homeSpan.addEventListener('click', () => {
        if (currentFlashcardView !== FLASHCARD_VIEW_FOLDERS) {
            currentFlashcardView = FLASHCARD_VIEW_FOLDERS;
            currentFolder = null;
            currentSet = null;
            updateFlashcardUI();
            loadFolders();
        }
    });
    flashcardBreadcrumbs.appendChild(homeSpan);

    if (currentFolder) {
        homeSpan.classList.remove('current');
        const separator1 = document.createElement('span');
        separator1.textContent = ' > ';
        separator1.classList.add('separator');
        flashcardBreadcrumbs.appendChild(separator1);

        const folderSpan = document.createElement('span');
        folderSpan.textContent = currentFolder.name;
        folderSpan.classList.add('current'); // Initially current
        folderSpan.addEventListener('click', () => {
            if (currentFlashcardView !== FLASHCARD_VIEW_SETS) {
                currentFlashcardView = FLASHCARD_VIEW_SETS;
                currentSet = null;
                updateFlashcardUI();
                loadFlashcardSets(currentFolder.id);
            }
        });
        flashcardBreadcrumbs.appendChild(folderSpan);
    }

    if (currentSet) {
        flashcardBreadcrumbs.lastChild.classList.remove('current'); // Remove current from folder
        const separator2 = document.createElement('span');
        separator2.textContent = ' > ';
        separator2.classList.add('separator');
        flashcardBreadcrumbs.appendChild(separator2);

        const setSpan = document.createElement('span');
        setSpan.textContent = currentSet.title;
        setSpan.classList.add('current');
        flashcardBreadcrumbs.appendChild(setSpan);
    }
}

/**
 * Loads and displays folders from Firestore.
 */
async function loadFolders() {
    if (!db || !isAuthReady) { // Ensure db is initialized and auth is ready
        console.warn("Firestore or Auth not ready, cannot load folders.");
        foldersLoader.style.display = 'flex';
        foldersLoader.textContent = 'Authenticating...';
        return;
    }

    flashcardFoldersSection.innerHTML = ''; // Clear existing content
    foldersLoader.style.display = 'flex'; // Show loader

    try {
        const foldersRef = collection(db, `artifacts/${appId}/users/${userId}/folders`);
        onSnapshot(foldersRef, (snapshot) => {
            flashcardFoldersSection.innerHTML = ''; // Clear before rendering
            if (snapshot.empty) {
                flashcardFoldersSection.innerHTML = '<p style="text-align: center; color: #718096; margin-top: 2rem;">No folders yet. Click the "+" button to add one!</p>';
                if (document.body.classList.contains('dark-mode')) {
                    flashcardFoldersSection.querySelector('p').style.color = '#a0aec0';
                }
            } else {
                snapshot.docs.forEach(doc => {
                    const folder = { id: doc.id, ...doc.data() };
                    createFolderItem(folder);
                });
            }
            foldersLoader.style.display = 'none'; // Hide loader
        }, (error) => {
            console.error("Error fetching folders:", error);
            showMessageModal("Error loading folders. Please try again.", null, null, false);
            foldersLoader.style.display = 'none';
            foldersLoader.textContent = 'Error loading folders.';
        });
    } catch (error) {
        console.error("Error setting up folder listener:", error);
        showMessageModal("Error setting up folder listener. Please try again.", null, null, false);
        foldersLoader.style.display = 'none';
        foldersLoader.textContent = 'Error loading folders.';
    }
}

/**
 * Creates and appends a folder item to the display.
 * @param {object} folder - The folder object from Firestore.
 */
function createFolderItem(folder) {
    const folderItem = document.createElement('div');
    folderItem.className = 'flashcard-folder-item';
    folderItem.dataset.folderId = folder.id;
    folderItem.innerHTML = `
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.5 21a3 3 0 003-3V9a2.25 2.25 0 00-2.25-2.25H15a3 3 0 00-3-3H9.75a3 3 0 00-3-3H4.5A2.25 2.25 0 002.25 3v15a3 3 0 003 3h15zm-1.5-12H6a.75.75 0 00-.75.75v6.75a.75.75 0 00.75.75h12a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75z" />
        </svg>
        <span class="name">${folder.name}</span>
        <span class="subject">${folder.subject || 'No Subject'}</span>
        <button class="item-options-button">...</button>
        <div class="item-options-menu">
            <button data-action="edit-folder">Edit</button>
            <button data-action="delete-folder" class="delete-option">Delete</button>
        </div>
    `;
    flashcardFoldersSection.appendChild(folderItem);

    folderItem.addEventListener('click', (e) => {
        if (!e.target.closest('.item-options-button')) {
            currentFolder = folder;
            currentFlashcardView = FLASHCARD_VIEW_SETS;
            updateFlashcardUI();
            loadFlashcardSets(folder.id);
        }
    });

    const optionsButton = folderItem.querySelector('.item-options-button');
    const optionsMenu = folderItem.querySelector('.item-options-menu');
    optionsButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent folder click event
        // Close other open menus
        document.querySelectorAll('.item-options-menu.active').forEach(menu => {
            if (menu !== optionsMenu) menu.classList.remove('active');
        });
        optionsMenu.classList.toggle('active');
    });

    optionsMenu.querySelector('[data-action="edit-folder"]').addEventListener('click', (e) => {
        e.stopPropagation();
        editFolder(folder);
        optionsMenu.classList.remove('active');
    });
    optionsMenu.querySelector('[data-action="delete-folder"]').addEventListener('click', (e) => {
        e.stopPropagation();
        // Directly call delete function without confirmation modal
        deleteFolder(folder.id);
        optionsMenu.classList.remove('active');
    });

    // Close menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!optionsButton.contains(e.target) && !optionsMenu.contains(e.target)) {
            optionsMenu.classList.remove('active');
        }
    });
}

/**
 * Shows the new folder modal for adding or editing.
 * @param {object} [folderToEdit=null] - The folder object if editing, null if adding.
 */
function showNewFolderModal(folderToEdit = null) {
    newFolderModal.style.display = 'flex';
    if (folderToEdit) {
        newFolderModalTitle.textContent = 'Edit Folder';
        newFolderNameInput.value = folderToEdit.name;
        newFolderSubjectSelect.value = folderToEdit.subject || '';
        saveFolderButton.dataset.folderId = folderToEdit.id; // Store ID for update
    } else {
        newFolderModalTitle.textContent = 'Add New Folder';
        newFolderNameInput.value = '';
        newFolderSubjectSelect.value = '';
        delete saveFolderButton.dataset.folderId; // Remove ID for new folder
    }
}

/**
 * Handles saving a new or edited folder to Firestore.
 */
async function saveFolder() {
    if (!db || !isAuthReady) { // Ensure db is initialized and auth is ready
        showMessageModal("Firestore or Auth not ready. Please try again later.", null, null, false);
        return;
    }

    const folderName = newFolderNameInput.value.trim();
    const folderSubject = newFolderSubjectSelect.value;
    const folderId = saveFolderButton.dataset.folderId;

    if (!folderName) {
        showMessageModal("Folder name cannot be empty.", null, null, false);
        return;
    }

    try {
        if (folderId) {
            // Update existing folder
            const folderRef = doc(db, `artifacts/${appId}/users/${userId}/folders`, folderId);
            await updateDoc(folderRef, { name: folderName, subject: folderSubject });
            console.log("Folder updated successfully!"); // Changed from showMessageModal
        } else {
            // Add new folder
            const foldersRef = collection(db, `artifacts/${appId}/users/${userId}/folders`);
            await addDoc(foldersRef, { name: folderName, subject: folderSubject, createdAt: new Date() });
            console.log("Folder added successfully!"); // Changed from showMessageModal
        }
        hideNewFolderModal();
    } catch (error) {
        console.error("Error saving folder:", error);
        showMessageModal("Error saving folder. Please try again.", null, null, false);
    }
}

/**
 * Deletes a folder from Firestore.
 * @param {string} folderId - The ID of the folder to delete.
 */
async function deleteFolder(folderId) {
    if (!db || !isAuthReady) { // Ensure db is initialized and auth is ready
        showMessageModal("Firestore or Auth not ready. Cannot delete folder.", null, null, false);
        return;
    }
    try {
        const folderRef = doc(db, `artifacts/${appId}/users/${userId}/folders`, folderId);
        // Delete all sets within this folder first
        const setsQuery = query(collection(db, `artifacts/${appId}/users/${userId}/flashcardSets`), where("folderId", "==", folderId));
        const setsSnapshot = await getDocs(setsQuery);
        const deleteSetPromises = setsSnapshot.docs.map(sDoc => deleteDoc(doc(db, `artifacts/${appId}/users/${userId}/flashcardSets`, sDoc.id)));
        await Promise.all(deleteSetPromises);

        await deleteDoc(folderRef);
        console.log("Folder and its contents deleted successfully!"); // Changed from showMessageModal
    } catch (error) {
        console.error("Error deleting folder:", error);
        showMessageModal("Error deleting folder. Please try again.", null, null, false);
    }
}

function hideNewFolderModal() {
    newFolderModal.style.display = 'none';
}

/**
 * Loads and displays flashcard sets for a given folder from Firestore.
 * @param {string} folderId - The ID of the parent folder.
 */
async function loadFlashcardSets(folderId) {
    if (!db || !isAuthReady) { // Ensure db is initialized and auth is ready
        console.warn("Firestore or Auth not ready, cannot load sets.");
        setsLoader.style.display = 'flex';
        setsLoader.textContent = 'Authenticating...';
        return;
    }

    flashcardSetsSection.innerHTML = ''; // Clear existing content
    setsLoader.style.display = 'flex'; // Show loader

    try {
        const setsRef = collection(db, `artifacts/${appId}/users/${userId}/flashcardSets`);
        const q = query(setsRef, where("folderId", "==", folderId));

        onSnapshot(q, async (snapshot) => {
            flashcardSetsSection.innerHTML = ''; // Clear before rendering
            if (snapshot.empty) {
                flashcardSetsSection.innerHTML = '<p style="text-align: center; color: #718096; margin-top: 2rem;">No sets yet in this folder. Click the "+" button to add one!</p>';
                if (document.body.classList.contains('dark-mode')) {
                    flashcardSetsSection.querySelector('p').style.color = '#a0aec0';
                }
            } else {
                // Fetch all sets and then sort them in memory
                const sets = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                // Sort by createdAt or title if needed
                sets.forEach(set => createSetItem(set));
            }
            setsLoader.style.display = 'none'; // Hide loader
        }, (error) => {
            console.error("Error fetching sets:", error);
            showMessageModal("Error loading sets. Please try again.", null, null, false);
            setsLoader.style.display = 'none';
            setsLoader.textContent = 'Error loading sets.';
        });
    } catch (error) {
        console.error("Error setting up set listener:", error);
        showMessageModal("Error setting up set listener. Please try again.", null, null, false);
        setsLoader.style.display = 'none';
        setsLoader.textContent = 'Error loading sets.';
    }
}


/**
 * Creates and appends a flashcard set item to the display.
 * @param {object} set - The flashcard set object from Firestore.
 */
function createSetItem(set) {
    const setItem = document.createElement('div');
    setItem.className = 'flashcard-set-item';
    setItem.dataset.setId = set.id;
    setItem.innerHTML = `
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M19.5 21a3 3 0 003-3V9a2.25 2.25 0 00-2.25-2.25H15a3 3 0 00-3-3H9.75a3 3 0 00-3-3H4.5A2.25 2.25 0 002.25 3v15a3 3 0 003 3h15zm-1.5-12H6a.75.75 0 00-.75.75v6.75a.75.75 0 00.75.75h12a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75z" clip-rule="evenodd" />
        </svg>
        <span class="name">${set.title}</span>
        <span class="card-count">${set.flashcards ? set.flashcards.length : 0} cards</span>
        <button class="item-options-button">...</button>
        <div class="item-options-menu">
            <button data-action="edit-set">Edit</button>
            <button data-action="delete-set" class="delete-option">Delete</button>
        </div>
    `;
    flashcardSetsSection.appendChild(setItem);

    setItem.addEventListener('click', (e) => {
        if (!e.target.closest('.item-options-button')) {
            currentSet = set;
            currentFlashcardsInSet = set.flashcards || [];
            currentFlashcardIndex = 0; // Reset index when entering a new set
            currentFlashcardView = FLASHCARD_VIEW_CARDS;
            updateFlashcardUI();
            renderFlashcardsInSet();
        }
    });

    const optionsButton = setItem.querySelector('.item-options-button');
    const optionsMenu = setItem.querySelector('.item-options-menu');
    optionsButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent set click event
        document.querySelectorAll('.item-options-menu.active').forEach(menu => {
            if (menu !== optionsMenu) menu.classList.remove('active');
        });
        optionsMenu.classList.toggle('active');
    });

    optionsMenu.querySelector('[data-action="edit-set"]').addEventListener('click', (e) => {
        e.stopPropagation();
        editSet(set);
        optionsMenu.classList.remove('active');
    });
    optionsMenu.querySelector('[data-action="delete-set"]').addEventListener('click', (e) => {
        e.stopPropagation();
        // Directly call delete function without confirmation modal
        deleteSet(set.id);
        optionsMenu.classList.remove('active');
    });

    // Close menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!optionsButton.contains(e.target) && !optionsMenu.contains(e.target)) {
            optionsMenu.classList.remove('active');
        }
    });
}

/**
 * Shows the new set modal for adding or editing.
 * @param {object} [setToEdit=null] - The set object if editing, null if adding.
 */
function showNewSetModal(setToEdit = null) {
    if (!currentFolder) {
        showMessageModal("Please select a folder first to add a new set.", null, null, false);
        return;
    }
    newSetModal.style.display = 'flex';
    if (setToEdit) {
        newSetModalTitle.textContent = 'Edit Set';
        newSetTitleInput.value = setToEdit.title;
        saveSetButton.dataset.setId = setToEdit.id; // Store ID for update
    } else {
        newSetModalTitle.textContent = 'Add New Set';
        newSetTitleInput.value = '';
        delete saveSetButton.dataset.setId; // Remove ID for new set
    }
}

/**
 * Handles saving a new or edited set to Firestore.
 */
async function saveSet() {
    if (!db || !isAuthReady) { // Ensure db is initialized and auth is ready
        showMessageModal("Firestore or Auth not ready. Please try again later.", null, null, false);
        return;
    }
    const setTitle = newSetTitleInput.value.trim();
    const setId = saveSetButton.dataset.setId;

    if (!setTitle) {
        showMessageModal("Set title cannot be empty.", null, null, false);
        return;
    }
    if (!currentFolder) {
        showMessageModal("No folder selected. Please go back and select a folder.", null, null, false);
        return;
    }

    try {
        if (setId) {
            // Update existing set
            const setRef = doc(db, `artifacts/${appId}/users/${userId}/flashcardSets`, setId);
            await updateDoc(setRef, { title: setTitle });
            console.log("Set updated successfully!"); // Changed from showMessageModal
        } else {
            // Add new set
            const setsRef = collection(db, `artifacts/${appId}/users/${userId}/flashcardSets`);
            await addDoc(setsRef, {
                title: setTitle,
                folderId: currentFolder.id,
                flashcards: [], // Initialize with empty array
                createdAt: new Date()
            });
            console.log("Set added successfully!"); // Changed from showMessageModal
        }
        hideNewSetModal();
    } catch (error) {
        console.error("Error saving set:", error);
        showMessageModal("Error saving set. Please try again.", null, null, false);
    }
}

/**
 * Deletes a set from Firestore.
 * @param {string} setId - The ID of the set to delete.
 */
async function deleteSet(setId) {
    if (!db || !isAuthReady) { // Ensure db is initialized and auth is ready
        showMessageModal("Firestore or Auth not ready. Cannot delete set.", null, null, false);
        return;
    }
    try {
        const setRef = doc(db, `artifacts/${appId}/users/${userId}/flashcardSets`, setId);
        await deleteDoc(setRef);
        console.log("Set deleted successfully!"); // Changed from showMessageModal
        // If the deleted set was the currently viewed one, go back to sets view
        if (currentSet && currentSet.id === setId) {
            currentSet = null;
            currentFlashcardView = FLASHCARD_VIEW_SETS;
            updateFlashcardUI();
            loadFlashcardSets(currentFolder.id);
        }
    } catch (error) {
        console.error("Error deleting set:", error);
        showMessageModal("Error deleting set. Please try again.", null, null, false);
    }
}

function hideNewSetModal() {
    newSetModal.style.display = 'none';
}

/**
 * Renders flashcards for the currently selected set.
 */
function renderFlashcardsInSet() {
    flashcardDisplayArea.innerHTML = '';
    if (currentFlashcardsInSet.length === 0) {
        flashcardDisplayArea.innerHTML = '<p class="flashcard-content-text">No flashcards yet in this set. Click the "+" button to add one!</p>';
        flashcardCountDisplay.textContent = '0/0';
        flipFlashcardButton.disabled = true;
        prevFlashcardButton.disabled = true;
        nextFlashcardButton.disabled = true;
        return;
    }

    flipFlashcardButton.disabled = false;
    prevFlashcardButton.disabled = false;
    nextFlashcardButton.disabled = false;

    if (currentFlashcardIndex < 0 || currentFlashcardIndex >= currentFlashcardsInSet.length) {
        currentFlashcardIndex = 0;
    }

    const flashcard = currentFlashcardsInSet[currentFlashcardIndex];
    const flashcardCardElement = document.createElement('div');
    flashcardCardElement.className = 'flashcard-card';
    flashcardCardElement.dataset.flashcardIndex = currentFlashcardIndex; // Use index as ID for now

    flashcardCardElement.innerHTML = `
        <div class="flashcard-face flashcard-front">
            <span class="flashcard-content-text">${flashcard.question}</span>
        </div>
        <div class="flashcard-face flashcard-back">
            <span class="flashcard-content-text">${flashcard.answer}</span>
        </div>
        <button class="delete-note-button delete-flashcard-button" title="Delete Flashcard">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.519M19.5 1.5a.75.75 0 00-1.5 0v2.25H6.75V1.5a.75.75 0 00-1.5 0v2.25H2.25c-.414 0-.75.336-.75.75v.256a46.41 46.41 0 001.99 9.804 50.803 50.803 0 003.006 4.032.75.75 0 00.75 0 50.803 50.803 0 003.006-4.032 46.41 46.41 0 001.99-9.804v-.256c0-.414-.336-.75-.75-.75H16.5zm-11.25 3V2.25h-.75a.75.75 0 00-.75.75v.227a48.816 48.816 0 013.878.519M12 6.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V7.5a.75.75 0 01.75-.75zM12 10.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>
        </button>
    `;
    flashcardDisplayArea.appendChild(flashcardCardElement);

    flashcardCard = flashcardCardElement;
    flashcardFront = flashcardCardElement.querySelector('.flashcard-front');
    flashcardBack = flashcardCardElement.querySelector('.flashcard-back');

    flashcardCardElement.addEventListener('click', (e) => {
        if (!e.target.closest('.delete-flashcard-button')) {
            flashcardCardElement.classList.toggle('flipped');
        }
    });

    flashcardCardElement.querySelector('.delete-flashcard-button').addEventListener('click', (e) => {
        e.stopPropagation();
        // Directly call delete function without confirmation modal
        deleteFlashcardByIndex(currentFlashcardIndex);
    });

    flashcardCountDisplay.textContent = `${currentFlashcardIndex + 1}/${currentFlashcardsInSet.length}`;
}

function flipCard() {
    const currentCard = flashcardDisplayArea.querySelector('.flashcard-card');
    if (currentCard) {
        currentCard.classList.toggle('flipped');
    }
}

function nextCard() {
    if (currentFlashcardsInSet.length === 0) return;
    const currentCard = flashcardDisplayArea.querySelector('.flashcard-card');
    if (currentCard && currentCard.classList.contains('flipped')) {
        currentCard.classList.remove('flipped');
        setTimeout(() => {
            currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcardsInSet.length;
            renderFlashcardsInSet();
        }, 300);
    } else {
        currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcardsInSet.length;
        renderFlashcardsInSet();
    }
}

function prevCard() {
    if (currentFlashcardsInSet.length === 0) return;
    const currentCard = flashcardDisplayArea.querySelector('.flashcard-card');
    if (currentCard && currentCard.classList.contains('flipped')) {
        currentCard.classList.remove('flipped');
        setTimeout(() => {
            currentFlashcardIndex = (currentFlashcardIndex - 1 + currentFlashcardsInSet.length) % currentFlashcardsInSet.length;
            renderFlashcardsInSet();
        }, 300);
    } else {
        currentFlashcardIndex = (currentFlashcardIndex - 1 + currentFlashcardsInSet.length) % currentFlashcardsInSet.length;
        renderFlashcardsInSet();
    }
}

function showNewFlashcardModal() {
    if (!currentSet) {
        showMessageModal("Please select a flashcard set first to add a new flashcard.", null, null, false);
        return;
    }
    newFlashcardFrontInput.value = '';
    newFlashcardBackInput.value = '';
    newFlashcardModal.style.display = 'flex';
}

function hideNewFlashcardModal() {
    newFlashcardModal.style.display = 'none';
}

/**
 * Adds a new flashcard to the current set in Firestore.
 */
async function addNewFlashcard() {
    if (!db || !isAuthReady) { // Ensure db is initialized and auth is ready
        showMessageModal("Firestore or Auth not ready. Please try again later.", null, null, false);
        return;
    }
    const question = newFlashcardFrontInput.value.trim();
    const answer = newFlashcardBackInput.value.trim();

    if (!question || !answer) {
        showMessageModal("Both question and answer are required for a new flashcard.", null, null, false);
        return;
    }
    if (!currentSet) {
        showMessageModal("No flashcard set selected. Please go back and select a set.", null, null, false);
        return;
    }

    try {
        const setRef = doc(db, `artifacts/${appId}/users/${userId}/flashcardSets`, currentSet.id);
        const updatedFlashcards = [...(currentSet.flashcards || []), { question, answer }];
        await updateDoc(setRef, { flashcards: updatedFlashcards });
        currentSet.flashcards = updatedFlashcards; // Update local state
        currentFlashcardsInSet = updatedFlashcards;
        currentFlashcardIndex = currentFlashcardsInSet.length - 1; // Go to the newly added card
        renderFlashcardsInSet();
        hideNewFlashcardModal();
        console.log("Flashcard added successfully!"); // Changed from showMessageModal
    } catch (error) {
        console.error("Error adding flashcard:", error);
        showMessageModal("Error adding flashcard. Please try again.", null, null, false);
    }
}

/**
 * Deletes a flashcard from the current set in Firestore by index.
 * @param {number} indexToDelete - The index of the flashcard to delete in the current set's array.
 */
async function deleteFlashcardByIndex(indexToDelete) {
    if (!db || !isAuthReady) { // Ensure db is initialized and auth is ready
        showMessageModal("Firestore or Auth not ready. Cannot delete flashcard.", null, null, false);
        return;
    }
    if (currentSet && indexToDelete !== null && indexToDelete >= 0 && indexToDelete < currentFlashcardsInSet.length) {
        try {
            const setRef = doc(db, `artifacts/${appId}/users/${userId}/flashcardSets`, currentSet.id);
            const updatedFlashcards = currentFlashcardsInSet.filter((_, i) => i !== indexToDelete);

            await updateDoc(setRef, { flashcards: updatedFlashcards });
            currentSet.flashcards = updatedFlashcards; // Update local state
            currentFlashcardsInSet = updatedFlashcards;

            if (currentFlashcardsInSet.length > 0) {
                // Adjust index if the last card was deleted or if index is out of bounds
                if (currentFlashcardIndex >= currentFlashcardsInSet.length) {
                    currentFlashcardIndex = currentFlashcardIndex - 1 + currentFlashcardsInSet.length; // Ensure index stays valid
                }
            } else {
                currentFlashcardIndex = -1; // No cards left
            }
            renderFlashcardsInSet();
            console.log("Flashcard deleted successfully!"); // Changed from showMessageModal
        } catch (error) {
            console.error("Error deleting flashcard:", error);
            showMessageModal("Error deleting flashcard. Please try again.", null, null, false);
        }
    }
}


// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', async function() {
    // Assign DOM elements here to ensure they are loaded
    appContainer = document.getElementById('appContainer');
    mainHeader = document.getElementById('mainHeader');
    questionsContainer = document.getElementById('questionsContainer');
    testContainer = document.getElementById('testContainer');
    preSubmitReviewContainer = document.getElementById('preSubmitReviewContainer');
    summaryContainer = document.getElementById('summaryContainer');
    finalScoreDisplay = document.getElementById('finalScoreDisplay');
    allQuestionsReviewList = document.getElementById('allQuestionsReviewList');
    preSubmitFlaggedList = document.getElementById('preSubmitFlaggedList');
    preSubmitUnansweredList = document.getElementById('preSubmitUnansweredList');
    backButton = document.getElementById('backButton');
    homeButton = document.getElementById('homeButton');
    checkQuestionsAgainButton = document.getElementById('checkQuestionsAgainButton');
    retakeTestButton = document.getElementById('retakeTestButton');

    // Home Page elements
    homeContainer = document.getElementById('homeContainer');
    testModeModal = document.getElementById('testModeModal');
    subjectItems = document.querySelectorAll('.subject-item');
    themeToggleButton = document.getElementById('themeToggleButton');

    // Test Progress Footer elements
    testProgressFooter = document.getElementById('testProgressFooter');
    progressBoxesContainer = document.getElementById('testProgressFooter');

    // Modals
    messageModalOverlay = document.getElementById('messageModal');
    messageModalText = document.getElementById('messageModalText');
    deleteNoteConfirmModal = document.getElementById('deleteNoteConfirmModal');
    deleteNoteConfirmYes = document.getElementById('deleteNoteConfirmYes');
    deleteNoteConfirmNo = document.getElementById('deleteNoteConfirmNo');
    deleteFlashcardConfirmModal = document.getElementById('deleteFlashcardConfirmModal');
    deleteFlashcardConfirmYes = document.getElementById('deleteFlashcardConfirmYes');
    deleteFlashcardConfirmNo = document.getElementById('deleteFlashcardConfirmNo');

    // Unified AI Modal elements
    aiButton = document.getElementById('aiButton');
    unifiedAiModalOverlay = document.getElementById('unifiedAiModal');
    unifiedAiModalCloseButton = document.getElementById('unifiedAiModalCloseButton');
    chatMessagesContainer = document.getElementById('chatMessages');
    chatInput = document.getElementById('chatInput');
    sendMessageButton = document.getElementById('sendButton');
    chatInitialState = document.getElementById('chatInitialState');
    suggestionChipsContainer = document.querySelector('.suggestion-chips');
    imageUpload = document.getElementById('imageUpload');
    imagePreviewContainer = document.getElementById('imagePreviewContainer');
    imagePreview = document.getElementById('imagePreview');
    imageFileName = document.getElementById('imageFileName');
    aiLoadingIndicator = document.getElementById('aiLoadingIndicator');

    // Notes Interface elements
    notesInterfaceButton = document.getElementById('notesInterfaceButton');
    notesInterfaceContainer = document.getElementById('notesInterfaceContainer');
    addNoteFab = document.getElementById('addNoteFab');
    fabOptionsContainer = document.getElementById('fabOptionsContainer');
    addTextNoteButton = document.getElementById('addTextNoteButton');
    addChecklistNoteButton = document.getElementById('addChecklistNoteButton');
    notesListContainer = document.getElementById('notesListContainer');

    // Flashcards elements (updated for new structure)
    flashcardsInterfaceButton = document.getElementById('flashcardsInterfaceButton');
    flashcardsInterfaceContainer = document.getElementById('flashcardsInterfaceContainer');
    flashcardsHeaderTitle = document.getElementById('flashcardsHeaderTitle');
    flashcardBreadcrumbs = document.getElementById('flashcardBreadcrumbs');
    flashcardFoldersSection = document.getElementById('flashcardFoldersSection');
    foldersLoader = document.getElementById('foldersLoader');
    flashcardSetsSection = document.getElementById('flashcardSetsSection');
    setsLoader = document.getElementById('setsLoader');
    flashcardsInSection = document.getElementById('flashcardsInSection');
    flashcardDisplayArea = document.getElementById('flashcardDisplayArea');
    flashcardCountDisplay = document.getElementById('flashcardCountDisplay');
    flipFlashcardButton = document.getElementById('flipFlashcardButton');
    prevFlashcardButton = document.getElementById('prevFlashcardButton');
    nextFlashcardButton = document.getElementById('nextFlashcardButton');
    addFlashcardFab = document.getElementById('addFlashcardFab');
    flashcardFabOptionsContainer = document.getElementById('flashcardFabOptionsContainer');
    addNewFolderButton = document.getElementById('addNewFolderButton');
    addNewSetButton = document.getElementById('addNewSetButton');
    // Corrected line: Removed redundant 'document =' assignment
    addNewFlashcardButtonFromFab = document.getElementById('addNewFlashcardButtonFromFab');
    newFlashcardModal = document.getElementById('newFlashcardModal');
    newFlashcardFrontInput = document.getElementById('newFlashcardQuestion');
    newFlashcardBackInput = document.getElementById('newFlashcardAnswer');
    addNewFlashcardButton = document.getElementById('addNewFlashcard');
    cancelNewFlashcardButton = document.getElementById('cancelNewFlashcard');

    // New Folder/Set Modals
    newFolderModal = document.getElementById('newFolderModal');
    newFolderModalTitle = document.getElementById('newFolderModalTitle');
    newFolderNameInput = document.getElementById('newFolderNameInput');
    newFolderSubjectSelect = document.getElementById('newFolderSubjectSelect');
    cancelNewFolderButton = document.getElementById('cancelNewFolder');
    saveFolderButton = document.getElementById('saveFolderButton');

    newSetModal = document.getElementById('newSetModal');
    newSetModalTitle = document.getElementById('newSetModalTitle');
    newSetTitleInput = document.getElementById('newSetTitleInput');
    cancelNewSetButton = document.getElementById('cancelNewSet');
    saveSetButton = document.getElementById('saveSetButton');

    // --- Firebase Initialization ---
    try {
        // Direct use of the provided firebaseConfig
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                userId = user.uid;
                isAuthReady = true;
                console.log("Firebase authenticated. User ID:", userId);
            } else {
                // Sign in anonymously if no user is logged in
                const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
                if (initialAuthToken) {
                    try {
                        await signInWithCustomToken(auth, initialAuthToken);
                    } catch (error) {
                        console.error("Error signing in with custom token:", error);
                        // Fallback to anonymous if custom token fails
                        await signInAnonymously(auth);
                    }
                } else {
                    await signInAnonymously(auth);
                }
            }
            // Log userId and isAuthReady status for debugging
            console.log("Auth state changed. userId:", userId, "isAuthReady:", isAuthReady);
        });
    } catch (error) {
        console.error("Firebase initialization error:", error);
        showMessageModal("Firebase failed to initialize. Data persistence may not work.", null, null, false);
    }

    // --- Initial Setup on Load ---
    showPage('homeContainer');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Load notes from localStorage (no change for notes)
    loadNotes();

    subjectItems.forEach(item => item.addEventListener('click', () => selectSubject(item.dataset.subject)));
    document.querySelectorAll('input[name="testMode"]').forEach(radio => radio.addEventListener('change', confirmTestMode));
    testModeModal.addEventListener('click', (e) => { if (e.target === testModeModal) testModeModal.style.display = 'none'; });

    document.getElementById('submitTestButton').addEventListener('click', () => {
        const unansweredCount = questions.filter((q) => !userAnswers.hasOwnProperty(q.id)).length;
        const flaggedCount = flaggedQuestions.size;

        let confirmationMessage = 'Are you sure you want to submit the test?';
        if (unansweredCount > 0) {
            confirmationMessage += ` You have ${unansweredCount} unanswered questions.`;
        }
        if (flaggedCount > 0) {
            confirmationMessage += ` You have ${flaggedCount} flagged questions.`;
        }

        // Removed confirmation for practice mode, only show for test mode
        if (currentTestMode === 'test' && (unansweredCount > 0 || flaggedCount > 0)) {
            showMessageModal(confirmationMessage, () => {
                generateSummary();
            }, () => { /* Do nothing on cancel */ });
        } else if (currentTestMode === 'test') {
            generateSummary(); // Directly generate summary if no unanswered/flagged in test mode
        } else { // Practice mode, no confirmation needed
            populatePreSubmitReview();
            showPage('preSubmitReviewContainer');
        }
    });

    messageModalOverlay.addEventListener('click', (e) => {
        if (e.target === messageModalOverlay) {
            hideMessageModal();
        }
    });

    deleteNoteConfirmYes.addEventListener('click', deleteNote);
    deleteNoteConfirmNo.addEventListener('click', () => {
        noteToDeleteId = null;
        deleteNoteConfirmModal.style.display = 'none';
    });
    deleteFlashcardConfirmYes.addEventListener('click', () => deleteFlashcardByIndex(flashcardToDeleteId)); // Changed to use new function
    deleteFlashcardConfirmNo.addEventListener('click', () => {
        flashcardToDeleteId = null;
        deleteFlashcardConfirmModal.style.display = 'none';
    });

    backButton.addEventListener('click', () => {
        if (currentPageId === 'flashcardsInterfaceContainer') {
            // Handle back navigation within flashcards
            if (currentFlashcardView === FLASHCARD_VIEW_CARDS) {
                currentFlashcardView = FLASHCARD_VIEW_SETS;
                currentSet = null;
                updateFlashcardUI();
                loadFlashcardSets(currentFolder.id);
            } else if (currentFlashcardView === FLASHCARD_VIEW_SETS) {
                currentFlashcardView = FLASHCARD_VIEW_FOLDERS;
                currentFolder = null;
                updateFlashcardUI();
                loadFolders();
            } else {
                // If in folders view, go back to home
                if (pageHistory.length > 0) {
                    const previousPageId = pageHistory.pop();
                    showPage(previousPageId, true);
                } else {
                    showPage('homeContainer');
                }
            }
        } else {
            // Existing general back button logic
            if (pageHistory.length > 0) {
                const previousPageId = pageHistory.pop();
                showPage(previousPageId, true);
            } else {
                showPage('homeContainer');
            }
        }
    });

    homeButton.addEventListener('click', () => {
        if (testContainer.style.display === 'flex' || notesInterfaceContainer.style.display === 'flex' || flashcardsInterfaceContainer.style.display === 'flex') {
            showMessageModal(
                "Are you sure you want to go to the home page? Your current progress/unsaved changes might be lost.",
                () => {
                    pageHistory = [];
                    showPage('homeContainer');
                },
                () => { /* Do nothing on cancel */ }
            );
        } else {
            pageHistory = [];
            showPage('homeContainer');
        }
    });

    document.getElementById('confirmSubmitButton').addEventListener('click', () => {
        generateSummary();
    });

    checkQuestionsAgainButton.addEventListener('click', () => showPage('testContainer'));
    retakeTestButton.addEventListener('click', () => {
        userAnswers = {};
        flaggedQuestions.clear();
        currentSubject = '';
        subjectItems.forEach(item => item.classList.remove('active-subject'));
        showPage('homeContainer');
    });

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    aiButton.addEventListener('click', () => {
        unifiedAiModalOverlay.style.display = 'flex';
        if (chatMessagesContainer.querySelectorAll('.chat-message').length === 0) {
            chatInitialState.style.display = 'flex';
        }
    });

    unifiedAiModalOverlay.addEventListener('click', (e) => {
        if (e.target === unifiedAiModalOverlay) {
            unifiedAiModalOverlay.style.display = 'none';
        }
    });

    if (suggestionChipsContainer) {
        suggestionChipsContainer.querySelectorAll('.suggestion-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const message = chip.textContent;
                sendMessageToGemini(message);
            });
        });
    }

    function handleSend() {
        const message = chatInput.value.trim();
        if (message || uploadedImageBase64) {
            sendMessageToGemini(message, !!uploadedImageBase64);
            chatInput.value = '';
            imageUpload.value = ''; // Clear file input
        }
    }

    sendMessageButton.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    document.getElementById('addImageButton').addEventListener('click', () => imageUpload.click());

    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImageBase64 = e.target.result;
                imagePreview.src = uploadedImageBase64;
                imageFileName.textContent = file.name;
                imagePreviewContainer.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    notesInterfaceButton.addEventListener('click', showNotesInterface);
    addNoteFab.addEventListener('click', () => fabOptionsContainer.classList.toggle('active'));
    addTextNoteButton.addEventListener('click', () => { addTextNote(); fabOptionsContainer.classList.remove('active'); });
    addChecklistNoteButton.addEventListener('click', () => { addChecklistNote(); fabOptionsContainer.classList.remove('active'); });
    document.addEventListener('click', (e) => {
        if (!addNoteFab.contains(e.target) && !fabOptionsContainer.contains(e.target)) {
            fabOptionsContainer.classList.remove('active');
        }
    });

    flashcardsInterfaceButton.addEventListener('click', showFlashcardsInterface);
    flipFlashcardButton.addEventListener('click', flipCard);
    prevFlashcardButton.addEventListener('click', prevCard);
    nextFlashcardButton.addEventListener('click', nextCard);

    addFlashcardFab.addEventListener('click', () => {
        // Toggle visibility of FAB options for flashcards
        flashcardFabOptionsContainer.classList.toggle('active');
    });

    // Event listeners for Flashcard FAB options
    addNewFolderButton.addEventListener('click', () => {
        showNewFolderModal();
        flashcardFabOptionsContainer.classList.remove('active');
    });
    addNewSetButton.addEventListener('click', () => {
        showNewSetModal();
        flashcardFabOptionsContainer.classList.remove('active');
    });
    addNewFlashcardButtonFromFab.addEventListener('click', () => {
        showNewFlashcardModal();
        flashcardFabOptionsContainer.classList.remove('active');
    });

    // New Folder Modal buttons
    cancelNewFolderButton.addEventListener('click', hideNewFolderModal);
    saveFolderButton.addEventListener('click', saveFolder);
    newFolderModal.addEventListener('click', (e) => { if (e.target === newFolderModal) hideNewFolderModal(); });

    // New Set Modal buttons
    cancelNewSetButton.addEventListener('click', hideNewSetModal);
    saveSetButton.addEventListener('click', saveSet);
    newSetModal.addEventListener('click', (e) => { if (e.target === newSetModal) hideNewSetModal(); });

    // New Flashcard Modal buttons (already existed, just ensure they are hooked up)
    addNewFlashcardButton.addEventListener('click', addNewFlashcard);
    cancelNewFlashcardButton.addEventListener('click', hideNewFlashcardModal);
    newFlashcardModal.addEventListener('click', (e) => { if (e.target === newFlashcardModal) hideNewFlashcardModal(); });

    // Close flashcard FAB options if clicked outside
    document.addEventListener('click', (e) => {
        if (!addFlashcardFab.contains(e.target) && !flashcardFabOptionsContainer.contains(e.target)) {
            flashcardFabOptionsContainer.classList.remove('active');
        }
    });
});
