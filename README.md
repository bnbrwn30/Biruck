<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Edu Boost - Mock Test</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        /* Apply Inter font globally for a clean look */
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f4f8; /* Light background color */
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            transition: background-color 0.3s ease, color 0.3s ease; /* Smooth theme transition */
            font-size: 16px; /* Adjusted base font size for better readability */
        }

        /* Ensure HTML and Body take full height */
        html {
            min-height: 100vh;
        }

        /* Dark Mode Styles */
        body.dark-mode {
            background-color: #1a202c; /* Dark background */
            color: #e2e8f0; /* Light text (white-grayish) */
        }
        body.dark-mode #appContainer {
            background-color: #1a202c; /* Ensure app container matches body */
        }
        body.dark-mode .header {
            background-color: #2d3748; /* Darker header */
            border-bottom-color: #4a5568;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4); /* Darker shadow for contrast */
        }
        body.dark-mode .back-button, body.dark-mode .home-button {
            background-color: #4a5568;
            color: #e2e8f0; /* Light text for icons */
        }
        body.dark-mode .back-button:hover, body.dark-mode .home-button:hover {
            background-color: #6366f1; /* Darker blue on hover */
        }
        /* Removed .time-left styles as the timer is removed */
        body.dark-mode .home-container h1 {
            color: #e2e8f0; /* Changed to white-grayish for consistency */
        }
        body.dark-mode .home-container .website-name,
        body.dark-mode .subject-selection h3,
        body.dark-mode .test-mode-modal-content h3,
        body.dark-mode .pre-submit-review-container h2,
        body.dark-mode .pre-submit-review-container .section-title,
        body.dark-mode .summary-container h2,
        body.dark-mode .summary-container .section-title,
        body.dark-mode .summary-container .summary-section h3,
        body.dark-mode .question-number,
        body.dark-mode .options-list label,
        body.dark-mode .summary-question-item span,
        body.dark-mode .summary-question-item-full .question-text-full,
        body.dark-mode .message-modal-content p, /* Updated */
        body.dark-mode .unified-ai-modal-content h3,
        body.dark-mode .chat-message,
        body.dark-mode .notes-interface-container h2, /* Notes interface header */
        body.dark-mode .notes-interface-container h3, /* Notes interface tab titles */
        body.dark-mode .notes-tab-button, /* Notes tab buttons */
        body.dark-mode .checklist-item .item-text, /* Checklist item text */
        body.dark-mode .add-item-container input::placeholder, /* Notes input placeholder */
        body.dark-mode .flashcards-interface-container h2, /* Flashcards interface header */
        body.dark-mode .flashcard-front, /* Flashcard front text */
        body.dark-mode .flashcard-back, /* Flashcard back text */
        body.dark-mode .flashcard-folder-item, /* New: folder item text */
        body.dark-mode .flashcard-set-item /* New: set item text */
        {
            color: #e2e8f0; /* General light text for dark mode */
        }
        body.dark-mode .subject-selection,
        body.dark-mode .test-container,
        body.dark-mode .pre-submit-review-container,
        body.dark-mode .summary-container,
        body.dark-mode .question-block,
        body.dark-mode .sidebar,
        body.dark-mode .subject-item,
        body.dark-mode .test-progress-footer,
        body.dark-mode .message-modal-content, /* Updated */
        body.dark-mode .unified-ai-modal-content,
        body.dark-mode .chat-input-container-new,
        body.dark-mode .chat-messages, /* Ensure chat messages background is dark */
        body.dark-mode .notes-interface-container, /* Notes interface container */
        body.dark-mode .notes-tab-pane, /* Notes tab panes */
        body.dark-mode .add-item-container input, /* Notes input field */
        body.dark-mode .flashcards-interface-container, /* Flashcards interface container */
        body.dark-mode .flashcard-card, /* Flashcard card */
        body.dark-mode .flashcard-folder-item, /* New: folder item background */
        body.dark-mode .flashcard-set-item /* New: set item background */
        {
            background-color: #2d3748; /* Darker backgrounds for main sections and modals */
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4); /* Stronger shadow */
            border-color: #4a5568; /* Darker borders */
        }
        body.dark-mode .subject-item {
            background-color: #4a5568; /* Default subject item in dark mode */
            border-color: #6366f1;
        }
        body.dark-mode .subject-item.active-subject {
            background-color: #4338ca; /* Darker blue for active subject in dark mode */
            border-color: #6366f1;
            color: #e0f2fe;
        }
        body.dark-mode .subject-item:hover {
            background-color: #4f46e5; /* Darker blue on hover */
        }
        body.dark-mode .test-mode-modal-content .test-mode-option label {
            background-color: #4a5568; /* Dark background for options */
            border-color: #6366f1;
            color: #e2e8f0;
        }
        body.dark-mode .test-mode-modal-content .test-mode-option label:hover {
            background-color: #6366f1;
            border-color: #818cf8;
        }
        body.dark-mode .test-mode-modal-content .test-mode-option input[type="radio"]:checked + span {
            color: #e0f2fe; /* Specific highlight color, not general text */
        }
        body.dark-mode .test-mode-modal-content .test-mode-option input[type="radio"]:checked ~ label {
            background-color: #4338ca;
            border-color: #6366f1;
        }
        body.dark-mode .test-mode-separator {
            border-bottom-color: #4a5568;
        }
        body.dark-mode .sidebar {
            background-color: #2d3748; /* Darker sidebar background */
            border-right-color: #4a5568;
        }
        body.dark-mode .sidebar-question-item {
            background-color: #4a5568; /* Dark background for sidebar items */
            border-color: #6366f1;
            color: #e2e8f0;
        }
        body.dark-mode .sidebar-question-item:hover {
            background-color: #6366f1;
            border-color: #818cf8;
        }
        body.dark-mode .sidebar-question-item.answered {
            background-color: #14532d; /* Darker green */
            border-color: #22c55e;
        }
        body.dark-mode .sidebar-question-item.flagged {
            background-color: #854d09;
            border-color: #facc15;
        }
        body.dark-mode .sidebar-question-item.active {
            background-color: #4338ca;
            border-color: #6366f1;
        }
        body.dark-mode .flag-icon {
            filter: brightness(0) invert(1); /* Keep white/light gray in dark mode */
        }
        body.dark-mode .flag-icon.flagged {
            filter: none; /* Show original red SVG in dark mode */
        }

        body.dark-mode .options-list label:hover {
            color: #cbd5e0; /* Lighter hover for text */
        }
        body.dark-mode .options-list input[type="radio"] {
            accent-color: #6366f1;
        }
        body.dark-mode .options-list label.correct-option-highlight {
            background-color: #14532d;
            border-color: #22c55e;
            color: #e0f2fe; /* Ensure text is light */
        }
        body.dark-mode .options-list label.incorrect-chosen-highlight {
            background-color: #7f1d1d;
            border-color: #ef4444;
            color: #fef2f2; /* Ensure text is light */
        }
        body.dark-mode .immediate-explanation-box {
            background-color: #7f1d1d;
            border-color: #ef4444;
            color: #fef2f2;
        }
        body.dark-mode .immediate-explanation-box strong {
            color: #fca5a5;
        }
        body.dark-mode .ai-explanation-container {
            background-color: #064e3b;
            border: 1px solid #34d399; /* Teal border */
            color: #a7f3d0; /* Light teal text */
        }
        body.dark-mode .ai-explanation-container strong {
            color: #047857;
        }
        body.dark-mode .ai-explanation-container .loader {
            border-top-color: #6ee7b7;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        body.dark-mode .review-question-item .review-link,
        body.dark-mode .summary-question-item .review-link {
            color: #93c5fd;
        }
        body.dark-mode .summary-score {
            color: #22c55e;
        }
        body.dark-mode .status-badge.answered,
        body.dark-mode .status-badge.correct {
            background-color: #14532d;
            color: #22c55e;
        }
        .status-badge.unanswered {
            background-color: transparent; /* No background highlight */
            color: #718096; /* Darker grey text */
            border: 1px solid #718096; /* Add a subtle border to define its area */
        }
        body.dark-mode .status-badge.unanswered {
            background-color: transparent; /* No background highlight */
            color: #a0aec0; /* Lighter grey text for dark mode */
            border: 1px solid #a0aec0; /* Subtle border for dark mode */
        }
        body.dark-mode .status-badge.incorrect {
            background-color: #7f1d1d;
            color: #ef4444;
        }
        body.dark-mode .status-badge.flagged {
            background-color: #854d09;
            color: #facc15;
        }
        body.dark-mode .summary-question-item-full {
            background-color: #4a5568;
            border-color: #6366f1;
        }
        body.dark-mode .summary-question-item-full .option-review { /* NEW: Ensure options within full review are dark */
            background-color: #2d3748; /* Darker background for options */
            color: #e2e8f0; /* White-grayish text */
            border: 1px solid #4a5568; /* Subtle border */
        }
        body.dark-mode .summary-question-item-full .option-review.correct-option {
            background-color: #14532d;
            border-color: #22c55e;
            color: #e0f2fe;
        }
        body.dark-mode .summary-question-item-full .option-review.user-chosen-incorrect {
            background-color: #7f1d1d;
            border-color: #ef4444;
            color: #fef2f2;
        }
        body.dark-mode .summary-question-item-full .explanation-box {
            background-color: #7f1d1d;
            border-color: #ef4444;
            color: #fef2f2;
        }
        body.dark-mode .summary-question-item-full .explanation-box strong {
            color: #fca5a5;
        }
        body.dark-mode .test-progress-footer {
            background-color: #2d3748;
            border-top: 1px solid #4a5568;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.4);
        }
        body.dark-mode .progress-box {
            background-color: #4a5568;
            border-color: #6366f1;
            color: #e2e8f0;
        }
        body.dark-mode .progress-box.answered {
            background-color: #4338ca;
            border-color: #6366f1;
            color: #e0f2fe;
        }
        body.dark-mode .progress-box:hover {
            background-color: #6366f1;
        }
        /* Confirmation Modal for dark mode */
        body.dark-mode .message-modal-content { /* Updated */
            background-color: #2d3748;
            color: #e2e8f0;
        }
        body.dark-mode .message-modal-content p { /* Updated */
            color: #e2e8f0;
        }
        body.dark-mode .message-modal-buttons .btn-no { /* Updated */
            background-color: #4a5568;
            color: #e2e8f0;
        }
        body.dark-mode .message-modal-buttons .btn-no:hover { /* Updated */
            background-color: #6366f1;
        }
        /* Corrected shadow for submit button */
        body.dark-mode .submit-button,
        body.dark-mode .confirm-submit-button, /* Corrected shadow here */
        body.dark-mode .action-button-summary,
        body.dark-mode .unified-ai-tab-button,
        body.dark-mode .notes-interface-button, /* Notes interface button */
        body.dark-mode .save-notes-button, /* Save notes button */
        body.dark-mode .add-item-button, /* Add item button */
        body.dark-mode .flashcards-interface-button, /* Flashcards button */
        body.dark-mode .flashcard-action-button, /* Flashcard action buttons */
        body.dark-mode .flashcard-nav-button /* Flashcard navigation buttons */
        {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Darker shadows for buttons */
        }
        body.dark-mode .message-modal-buttons .btn-yes { /* Updated */
            box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);
        }
        body.dark-mode .message-modal-buttons .btn-no { /* Updated */
            box-shadow: 0 4px 10px rgba(128, 128, 128, 0.3); /* Grayish shadow for no button */
        }
        body.dark-mode .chat-message.user {
            background-color: #4338ca; /* User message background */
            color: #e0f2fe;
        }
        body.dark-mode .chat-message.ai {
            background-color: #4a5568;
            color: #e2e8f0;
        }
        body.dark-mode .chat-input {
            background-color: #4a5568;
            border-color: #6366f1;
            color: #e2e8f0;
        }
        body.dark-mode .chat-input:focus {
            border-color: #4f46e5;
        }
        body.dark-mode .chat-input::placeholder {
            color: #a0aec0;
        }
        .icon-button {
            background-color: transparent;
            border: none;
            padding: 0.5rem;
            cursor: pointer;
            color: #4a5568;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s ease, color 0.2s ease;
        }
        .icon-button:hover {
            background-color: #e2e8f0;
        }
        body.dark-mode .icon-button {
            color: #a0aec0;
        }
        body.dark-mode .icon-button:hover {
            background-color: #4a5568;
        }


        /* Main app container to hold all pages */
        #appContainer {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            width: 100%;
            transition: background-color 0.3s ease;
        }

        /* Header styles (now part of appContainer, shown conditionally) */
        .header {
            background-color: #ffffff;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
            width: 100%; /* Ensure header spans full width */
            box-sizing: border-box; /* Include padding in width */
            transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            position: relative; /* Added for z-index to work */
            z-index: 100; /* Ensure header is on top */
        }

        .header-buttons {
            display: flex;
            gap: 0.5rem; /* Space between back and home buttons */
            align-items: center;
        }

        .back-button, .home-button {
            background-color: #4a5568; /* Dark gray */
            color: white;
            padding: 0.5rem; /* Smaller padding for icon buttons */
            border-radius: 0.5rem;
            font-weight: 500;
            transition: background-color 0.2s ease;
            cursor: pointer;
            border: none;
            width: 40px; /* Fixed width for icon buttons */
            height: 40px; /* Fixed height for icon buttons */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .back-button:hover, .home-button:hover {
            background-color: #2d3748; /* Darker gray on hover */
        }
        .back-button svg, .home-button svg {
            width: 24px; /* Size for SVG icons */
            height: 24px;
            fill: currentColor; /* Use button's text color for SVG fill */
        }

        /* Removed .time-left styles */

        /* Main container for the entire test */
        .test-container {
            display: flex;
            flex-grow: 1; /* Allow container to take available height */
            margin: 1rem auto; /* Added auto for horizontal centering */
            background-color: #ffffff;
            border-radius: 0.75rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            overflow: hidden; /* For rounded corners on inner elements */
            position: relative; /* For footer positioning */
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            max-width: 1000px; /* Limit max-width for better appearance on large screens */
        }

        /* Left sidebar for question navigation */
        .sidebar {
            width: 250px; /* Fixed width for sidebar */
            background-color: #f8fafc; /* Lighter background for sidebar */
            border-right: 1px solid #e2e8f0;
            padding: 1.5rem;
            overflow-y: auto; /* Scrollable if many questions */
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        .sidebar-question-item {
            padding: 0.75rem 1rem;
            margin-bottom: 0.5rem;
            border-radius: 0.5rem;
            background-color: #ffffff;
            border: 1px solid #cbd5e0;
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease, color 0.3s ease;
            font-size: 0.95rem; /* Slightly increased */
            font-weight: 500;
            color: #4a5568;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .sidebar-question-item:hover {
            background-color: #edf2f7;
            border-color: #a0aec0;
        }
        body.dark-mode .sidebar-question-item {
            background-color: #4a5568;
            border-color: #6366f1;
            color: #e2e8f0;
        }
        body.dark-mode .sidebar-question-item:hover {
            background-color: #6366f1;
            border-color: #818cf8;
        }
        body.dark-mode .sidebar-question-item.answered {
            background-color: #14532d; /* Light green for answered */
            border-color: #34d399;
        }
        body.dark-mode .sidebar-question-item.flagged {
            background-color: #854d09; /* Light yellow for flagged */
            border-color: #f6e05e;
        }
        body.dark-mode .sidebar-question-item.active {
            background-color: #4338ca;
            border-color: #6366f1;
        }
        .sidebar-question-status {
            font-size: 0.85rem; /* Slightly increased */
            color: #718096;
            transition: color 0.3s ease;
        }

        /* Main content area for questions */
        .main-content {
            flex-grow: 1;
            padding: 2rem;
            overflow-y: auto; /* Scrollable if many questions */
            padding-bottom: 80px; /* Space for fixed footer */
        }

        /* Individual question block styles */
        .question-block {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .question-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px dashed #e2e8f0;
            transition: border-color 0.3s ease;
        }
        .question-number {
            font-size: 1.3rem; /* Slightly increased */
            font-weight: 700;
            color: #2d3748;
            transition: color 0.3s ease;
        }
        /* Flag icon styles - Adjusted size and filter for SVG */
        .flag-icon {
            cursor: pointer;
            width: 20px; /* Set explicit width for the SVG image */
            height: 20px; /* Set explicit height for the SVG image */
            transition: filter 0.3s ease;
            filter: brightness(0) invert(1); /* Make default SVG white/light gray */
        }
        .flag-icon.flagged {
            filter: none; /* Show original red SVG when flagged */
        }
        body.dark-mode .flag-icon {
            filter: brightness(0) invert(1); /* Keep white/light gray in dark mode */
        }
        body.dark-mode .flag-icon.flagged {
            filter: none; /* Show original red SVG in dark mode */
        }
        .question-text {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #2d3748;
            margin-bottom: 1.5rem;
            transition: color 0.3s ease;
        }
        /* NEW: Options list as a grid */
        .options-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
        }
        .options-list label {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            font-size: 1.05rem;
            color: #4a5568;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .options-list label:hover {
            background-color: #f7fafc;
            border-color: #cbd5e0;
        }
        body.dark-mode .options-list label {
            border-color: #4a5568;
        }
        body.dark-mode .options-list label:hover {
            background-color: #4a5568;
            border-color: #6366f1;
        }
        .options-list input[type="radio"] {
            margin-right: 0.75rem;
            transform: scale(1.2);
            accent-color: #4f46e5;
        }
        /* Styles for immediate feedback in "Right After" mode */
        .options-list label.correct-option-highlight {
            background-color: #d1fae5;
            border-color: #34d399;
        }
        .options-list label.incorrect-chosen-highlight {
            background-color: #fee2e2;
            border-color: #fca5a5;
        }
        .immediate-explanation-box {
            background-color: #fef2f2;
            border: 1px solid #fca5a5;
            padding: 0.75rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            font-size: 0.95rem;
            color: #b91c1c;
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .immediate-explanation-box strong {
            color: #7f1d1d;
            transition: color 0.3s ease;
        }


        /* Submit Button (for main test page) */
        .submit-button {
            background-color: #10b981; /* Green */
            color: white;
            padding: 0.8rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            transition: background-color 0.2s ease, transform 0.2s ease;
            cursor: pointer;
            border: none;
            margin-top: 2rem;
            box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
        }
        .submit-button:hover {
            background-color: #059669; /* Darker green */
            transform: translateY(-2px);
        }
        .submit-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(16, 185, 129, 0.3);
        }

        /* Pre-Submit Review Page Styles */
        .pre-submit-review-container, .summary-container {
            flex-grow: 1;
            margin: 1rem auto; /* Added auto for horizontal centering */
            padding: 2rem;
            background-color: #ffffff;
            border-radius: 0.75rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            display: none; /* Hidden by default */
            flex-direction: column;
            align-items: center; /* Changed from flex-start to center */
            text-align: left; /* Align text within sections to left */
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            max-width: 1000px; /* Limit max-width for better appearance on large screens */
        }
        .pre-submit-review-container h2, .summary-container h2 {
            font-size: 2.6rem; /* Slightly increased */
            font-weight: 800;
            color: #2d3748;
            margin-bottom: 1.5rem;
            transition: color 0.3s ease;
            align-self: center; /* Changed from flex-start to center */
        }
        .pre-submit-review-container .section-title, .summary-container .section-title {
            font-size: 1.9rem; /* Slightly increased */
            font-weight: 700;
            color: #4a5568;
            margin-bottom: 1.5rem;
            transition: color 0.3s ease;
            align-self: center; /* Changed from flex-start to center */
        }
        .pre-submit-review-container .review-section, .summary-container .summary-section {
            width: 100%;
            max-width: 700px;
            margin-bottom: 1.5rem;
            padding: 1.5rem;
            background-color: #f8fafc;
            border-radius: 0.75rem;
            border: 1px solid #e2e8f0;
            text-align: left;
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        body.dark-mode .pre-submit-review-container .review-section,
        body.dark-mode .summary-container .summary-section {
            background-color: #2d3748; /* Darker background for review sections */
            border-color: #4a5568;
        }
        body.dark-mode .pre-submit-review-container .review-section h3,
        body.dark-mode .summary-container .summary-section h3 {
            font-size: 1.6rem; /* Slightly increased */
            font-weight: 700;
            color: #e2e8f0; /* White-grayish text */
            margin-bottom: 1rem;
            border-bottom: 1px dashed #cbd5e0;
            padding-bottom: 0.5rem;
            transition: color 0.3s ease, border-color 0.3s ease;
        }
        body.dark-mode .pre-submit-review-container .review-section h3 {
            border-bottom-color: #4a5568;
        }

        /* NEW Table-like structure for review lists */
        .review-table-container {
            width: 100%;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            overflow: hidden; /* Ensures rounded corners */
            margin-bottom: 1rem;
        }
        body.dark-mode .review-table-container {
            border-color: #4a5568;
        }

        .review-table-header, .review-table-row {
            display: grid;
            /* Updated grid-template-columns for better spacing and Question Text clarity */
            grid-template-columns: 0.5fr 3.5fr 1.5fr; /* Question #, Question Text, Status/Link */
            padding: 0.75rem 1rem;
            align-items: center;
            border-bottom: 1px solid #edf2f7;
        }
        body.dark-mode .review-table-header, body.dark-mode .review-table-row {
            border-bottom-color: #4a5568;
        }

        .review-table-header {
            background-color: #e2e8f0;
            font-weight: 700;
            color: #2d3748;
            font-size: 1.05rem; /* Slightly increased */
        }
        body.dark-mode .review-table-header {
            background-color: #4a5568;
            color: #e2e8f0;
        }

        .review-table-row {
            background-color: #ffffff;
            color: #4a5568;
            font-size: 1.00rem; /* Slightly increased */
            transition: background-color 0.2s ease;
        }
        body.dark-mode .review-table-row {
            background-color: #2d3748;
            color: #e2e8f0;
        }
        .review-table-row:hover {
            background-color: #f7fafc;
        }
        body.dark-mode .review-table-row:hover {
            background-color: #4a5568;
        }

        .review-table-row:last-child {
            border-bottom: none;
        }

        .review-table-cell-number {
            font-weight: 600;
        }

        .review-table-cell-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .review-table-cell-status {
            display: flex;
            justify-content: flex-end; /* Align status/link to the right */
            align-items: center;
            gap: 0.5rem;
        }

        /* START: Review Link as Button */
        .review-link {
            display: inline-block; /* Make it behave like a block for padding/margins */
            padding: 0.4rem 0.8rem; /* Padding for button feel */
            background-color: #4f46e5; /* Indigo blue */
            color: white !important; /* Force white text */
            border-radius: 0.375rem; /* Rounded corners */
            text-decoration: none; /* Remove underline */
            font-weight: 600;
            font-size: 0.9rem; /* Slightly smaller font for button */
            border: none;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.2s ease;
            box-shadow: 0 2px 5px rgba(79, 70, 229, 0.2); /* Subtle shadow */
        }
        .review-link:hover {
            background-color: #4338ca; /* Darker indigo on hover */
            transform: translateY(-1px);
        }
        body.dark-mode .review-link {
            background-color: #6366f1; /* Lighter indigo for dark mode */
            color: #e0f2fe !important; /* Ensure light text in dark mode */
            box-shadow: 0 2px 5px rgba(99, 102, 241, 0.3);
        }
        body.dark-mode .review-link:hover {
            background-color: #4f46e5; /* Darker indigo on hover in dark mode */
        }
        /* END: Review Link as Button */


        .pre-submit-review-container .confirm-submit-button {
            background-color: #ef4444; /* Red for final submit */
            color: white;
            padding: 1rem 2.5rem;
            border-radius: 0.75rem;
            font-weight: 700;
            font-size: 1.15rem; /* Slightly increased */
            transition: background-color 0.2s ease, transform 0.2s ease;
            cursor: pointer;
            border: none;
            margin-top: 2rem;
            /* Corrected shadow: from 0 44px 10px to 0 4px 10px */
            box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);
            align-self: center; /* Center the button */
        }
        .pre-submit-review-container .confirm-submit-button:hover {
            background-color: #dc2626; /* Darker red */
            transform: translateY(-2px);
        }
        .pre-submit-review-container .confirm-submit-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(239, 68, 68, 0.3);
        }

        /* Summary/Results Page Specific Styles */
        .summary-score {
            font-size: 1.9rem; /* Slightly increased */
            font-weight: 700;
            color: #059669; /* Green for score */
            margin-bottom: 2rem;
            transition: color 0.3s ease;
            align-self: center; /* Changed from flex-start to center */
        }
        .summary-question-item .correct-answer {
            font-weight: 600;
            color: #059669; /* Green for correct answer */
            margin-left: 1rem;
        }
        .summary-question-item .user-answer-incorrect {
            font-weight: 600;
            color: #ef4444; /* Red for incorrect user answer */
            margin-left: 0.5rem;
        }
        .summary-question-item .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.85rem; /* Slightly increased */
            font-weight: 600;
            margin-left: 0.75rem;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        .status-badge.answered { background-color: #d1fae5; color: #059669; }
        .status-badge.unanswered {
            background-color: transparent; /* No background highlight */
            color: #718096; /* Darker grey text */
            border: 1px solid #718096; /* Add a subtle border to define its area */
        }
        body.dark-mode .status-badge.unanswered {
            color: #a0aec0; /* Lighter grey text for dark mode */
        }
        .status-badge.flagged { background-color: #fefcbf; color: #f6e05e; }
        .status-badge.correct { background-color: #d1fae5; color: #059669; }
        .status-badge.incorrect { background-color: #fee2e2; color: #ef4444; }

        /* New button for summary page */
        .action-button-summary {
            background-color: #4f46e5; /* Indigo color */
            color: white;
            padding: 1rem 2.5rem;
            border-radius: 0.75rem;
            font-weight: 700;
            font-size: 1.15rem; /* Slightly increased */
            transition: background-color 0.2s ease, transform 0.2s ease;
            cursor: pointer;
            border: none;
            margin-top: 2rem;
            box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);
        }
        .action-button-summary:hover {
            background-color: #4338ca; /* Darker indigo */
            transform: translateY(-2px);
        }
        .action-button-summary:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(79, 70, 229, 0.3);
        }
        .action-button-summary.retake {
            background-color: #f97316; /* Orange for retake */
            box-shadow: 0 4px 10px rgba(249, 115, 22, 0.3);
        }
        .action-button-summary.retake:hover {
            background-color: #ea580c; /* Darker orange */
        }
        /* Full question review item in summary */
        .summary-question-item-full {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            text-align: left; /* Align text left within the item */
            transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        body.dark-mode .summary-question-item-full { /* Ensure the full question item itself is dark */
            background-color: #4a5568;
            border-color: #6366f1;
        }
        body.dark-mode .summary-question-item-full .question-text-full {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #e2e8f0; /* White-grayish text */
            margin-bottom: 1rem;
            transition: color 0.3s ease;
        }
        .summary-question-item-full .options-review-list {
            margin-bottom: 1rem;
        }
        .summary-question-item-full .option-review {
            padding: 0.4rem 0.6rem;
            border-radius: 0.375rem;
            margin-bottom: 0.4rem;
            font-size: 1rem; /* Slightly increased */
            color: #4a5568;
            border: 1px solid transparent; /* Default transparent border */
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        body.dark-mode .summary-question-item-full .option-review { /* NEW: Ensure options within full review are dark */
            background-color: #2d3748;
            color: #e2e8f0;
            border: 1px solid #4a5568;
        }
        body.dark-mode .summary-question-item-full .option-review.correct-option {
            background-color: #14532d;
            border-color: #22c55e;
            color: #e0f2fe;
        }
        body.dark-mode .summary-question-item-full .option-review.user-chosen-incorrect {
            background-color: #7f1d1d;
            border-color: #ef4444;
            color: #fef2f2;
        }
        body.dark-mode .summary-question-item-full .explanation-box {
            background-color: #7f1d1d;
            border-color: #ef4444;
            color: #fef2f2;
        }
        body.dark-mode .summary-question-item-full .explanation-box strong {
            color: #fca5a5;
        }
        /* Styles for AI explanation */
        .ai-explanation-container {
            background-color: #ecfdf5; /* Light teal */
            border: 1px solid #a7f3d0; /* Teal border */
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            font-size: 0.95rem;
            color: #065f46; /* Dark teal text */
            text-align: left;
            line-height: 1.5; /* Ensure good line spacing */
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        body.dark-mode .ai-explanation-container {
            background-color: #064e3b;
            border: 1px solid #34d399; /* Teal border */
            color: #a7f3d0; /* Light teal text */
        }
        body.dark-mode .ai-explanation-container strong {
            color: #047857;
        }
        body.dark-mode .ai-explanation-container .loader {
            border-top-color: #6ee7b7;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        /* Home Page Styles */
        .home-container {
            flex-grow: 1;
            display: flex;
            flex-direction: row; /* Default to row for larger screens */
            flex-wrap: wrap; /* Allow wrapping */
            justify-content: center;
            align-items: center;
            gap: 2rem;
            padding: 2rem;
            background-color: #f0f4f8;
            position: relative;
            transition: background-color 0.3s ease;
            max-width: 1200px; /* Limit max width for centering */
            margin: 1rem auto; /* Center the container */
        }
        body.dark-mode .home-container {
            background-color: #1a202c;
        }
        .home-welcome-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex: 1 1 45%; /* Allow it to take roughly half the width, flex-grow, flex-shrink, basis */
            min-width: 300px; /* Prevent it from becoming too narrow */
            padding: 1rem;
            box-sizing: border-box;
        }
        .home-container h1 {
            font-size: 3.6rem;
            font-weight: 800;
            color: #2d3748;
            margin-bottom: 0.5rem;
            transition: color 0.3s ease;
        }
        body.dark-mode .home-container h1 {
            color: #e2e8f0;
        }
        .home-container .website-name {
            font-size: 1.25rem;
            color: #718096;
            margin-bottom: 2.5rem;
            font-style: italic;
            transition: color 0.3s ease;
        }
        .home-container .subject-selection {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            flex: 0 1 350px; /* Adjusted flex-basis to make the box bigger */
            max-width: 405px; /* Set a more constrained max-width for the box (300 * 1.35) */
            margin-bottom: 1.5rem;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        body.dark-mode .subject-selection {
            background-color: #2d3748;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
            border-color: #4a5568;
        }
        .home-container .subject-selection h3 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #4a5568;
            margin-bottom: 1.5rem;
            transition: color 0.3s ease;
        }
        .home-container .subject-grid {
            display: flex;
            flex-direction: column; /* Keep vertical stacking */
            gap: 1rem;
            margin-bottom: 0; /* Removed bottom margin as start button is gone */
            width: 100%;
        }
        .home-container .subject-item {
            padding: 1rem;
            border: 1px solid #cbd5e0;
            border-radius: 0.75rem;
            background-color: #edf2f7;
            color: #4a5568;
            font-weight: 600;
            cursor: pointer;
            opacity: 1;
            transition: all 0.2s ease, background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
            text-align: center;
        }
        body.dark-mode .subject-item {
            background-color: #4a5568;
            border-color: #6366f1;
            color: #e2e8f0;
        }
        .home-container .subject-item.active-subject {
            background-color: #e0f2fe;
            border-color: #63b3ed;
            color: #2b6cb0;
            font-weight: 700;
        }
        body.dark-mode .subject-item.active-subject {
            background-color: #4338ca;
            border-color: #6366f1;
            color: #e0f2fe;
        }
        .home-container .subject-item:hover {
            background-color: #d1edfd;
        }
        body.dark-mode .subject-item:hover {
            background-color: #4f46e5;
        }
        /* Modal styles for test mode selection */
        .test-mode-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            display: none; /* Changed from flex to none */
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .test-mode-modal-content {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 90%;
            max-width: 400px;
            text-align: left;
            transform: translateY(-20px);
            animation: fadeInScale 0.3s ease-out forwards;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        body.dark-mode .test-mode-modal-content {
            background-color: #2d3748;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
            border-color: #4a5568;
        }
        @keyframes fadeInScale {
            from { opacity: 0; transform: translateY(-20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .test-mode-modal-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 1.5rem;
            transition: color 0.3s ease;
        }
        .test-mode-modal-content .test-mode-option label {
            display: block;
            padding: 1rem;
            border: 2px solid #cbd5e0;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
            color: #4a5568;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        }
        body.dark-mode .test-mode-modal-content .test-mode-option label {
            background-color: #4a5568;
            border-color: #6366f1;
            color: #e2e8f0;
        }
        .test-mode-modal-content .test-mode-option label:hover {
            background-color: #e0f2fe;
            border-color: #93c5fd;
        }
        body.dark-mode .test-mode-modal-content .test-mode-option label:hover {
            background-color: #6366f1;
            border-color: #818cf8;
        }
        .test-mode-modal-content .test-mode-option input[type="radio"] {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
        .test-mode-modal-content .test-mode-option input[type="radio"]:checked + span {
            color: #2b6cb0;
            font-weight: 700;
        }
        body.dark-mode .test-mode-modal-content .test-mode-option input[type="radio"]:checked + span {
            color: #e0f2fe;
        }
        .test-mode-modal-content .test-mode-option input[type="radio"]:checked ~ label {
            background-color: #e0f2fe;
            border-color: #63b3ed;
        }
        body.dark-mode .test-mode-modal-content .test-mode-option input[type="radio"]:checked ~ label {
            background-color: #4338ca;
            border-color: #6366f1;
        }
        /* Separator line */
        .test-mode-separator {
            border-bottom: 1px solid #cbd5e0;
            margin: 1rem 0;
            transition: border-color 0.3s ease;
        }
        body.dark-mode .test-mode-separator {
            border-bottom-color: #4a5568;
        }

        /* Theme Toggle Button */
        .theme-toggle-button {
            position: absolute;
            top: 2rem; /* Adjusted top to move it down slightly from the very edge */
            right: 2rem; /* Adjusted right to move it left slightly from the very edge */
            background-color: #cbd5e0;
            color: #2d3748;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
            z-index: 200;
        }
        body.dark-mode .theme-toggle-button {
            background-color: #4a5568;
            color: #e2e8f0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        .theme-toggle-button:hover {
            background-color: #a0aec0;
            transform: scale(1.05);
        }
        body.dark-mode .theme-toggle-button:hover {
            background-color: #6366f1;
        }
        /* Theme toggle icon visibility */
        .theme-toggle-button .dark-mode-icon {
            display: inline-block; /* Default: show moon */
        }
        .theme-toggle-button .light-mode-icon {
            display: none; /* Default: hide sun */
        }
        body.dark-mode .theme-toggle-button .dark-mode-icon {
            display: none; /* In dark mode: hide moon */
        }
        body.dark-mode .theme-toggle-button .light-mode-icon {
            display: inline-block; /* In dark mode: show sun */
        }

        /* AI Button Styles */
        .ai-button {
            background-color: #4f46e5; /* Indigo color */
            color: white;
            padding: 0.5rem 2rem; /* Adjusted padding for rectangular shape */
            border-radius: 0.75rem; /* Slightly more rounded corners for the rectangular shape */
            font-weight: 600;
            font-size: 1.1rem; /* Adjusted font size */
            cursor: pointer;
            border: none;
            transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);
            display: flex; /* Use flexbox for centering text */
            justify-content: center;
            align-items: center;
            width: 150px; /* Increased width significantly */
            height: 40px; /* Decreased height significantly */
            margin-top: 2.5rem; /* Add some space from the text above */
        }

        body.dark-mode .ai-button {
            background-color: #6366f1; /* Lighter indigo for dark mode */
            box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
        }

        .ai-button:hover {
            background-color: #4338ca; /* Darker indigo on hover */
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(79, 70, 229, 0.4);
        }

        body.dark-mode .ai-button:hover {
            background-color: #4f46e5; /* Darker indigo on hover in dark mode */
        }

        .ai-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(79, 70, 229, 0.3);
        }

        /* Notes Interface Button Styles (formerly notes-button) */
        .notes-interface-button {
            background-color: #22c55e; /* Green color for notes */
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            border: none;
            transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 10px rgba(34, 197, 94, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 40px;
            margin-top: 1rem; /* Space between AI and Notes button */
        }

        body.dark-mode .notes-interface-button {
            background-color: #16a34a; /* Darker green for dark mode */
            box-shadow: 0 4px 10px rgba(22, 163, 74, 0.3);
        }

        .notes-interface-button:hover {
            background-color: #15803d; /* Even darker green on hover */
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(34, 197, 94, 0.4);
        }

        body.dark-mode .notes-interface-button:hover {
            background-color: #14532d;
        }

        .notes-interface-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(34, 197, 94, 0.3);
        }

        /* Flashcards Button Styles */
        .flashcards-interface-button {
            background-color: #f97316; /* Orange color for flashcards */
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            border: none;
            transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 10px rgba(249, 115, 22, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 40px;
            margin-top: 1rem; /* Space between Notes and Flashcards button */
        }

        body.dark-mode .flashcards-interface-button {
            background-color: #ea580c; /* Darker orange for dark mode */
            box-shadow: 0 4px 10px rgba(234, 88, 12, 0.3);
        }

        .flashcards-interface-button:hover {
            background-color: #c2410c; /* Even darker orange on hover */
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(249, 115, 22, 0.4);
        }

        body.dark-mode .flashcards-interface-button:hover {
            background-color: #9a3412;
        }

        .flashcards-interface-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(249, 115, 22, 0.3);
        }


        /* Test Progress Footer */
        .test-progress-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #ffffff;
            border-top: 1px solid #e2e8f0;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
            padding: 0.75rem 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            overflow-x: auto;
            white-space: nowrap;
            z-index: 999;
            transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        body.dark-mode .test-progress-footer {
            background-color: #2d3748;
            border-top: 1px solid #4a5568;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.4);
        }

        .progress-box {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 0.375rem;
            background-color: #f0f4f8;
            border: 1px solid #cbd5e0;
            font-size: 0.85rem;
            font-weight: 600;
            color: #4a5568;
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
            flex-shrink: 0;
        }
        body.dark-mode .progress-box {
            background-color: #4a5568;
            border-color: #6366f1;
            color: #e2e8f0;
        }

        .progress-box.answered {
            background-color: #63b3ed;
            border-color: #4299e1;
            color: white;
        }
        body.dark-mode .progress-box.answered {
            background-color: #4338ca;
            border-color: #6366f1;
            color: #e0f2fe;
        }

        .progress-box:hover {
            background-color: #a0aec0;
        }
        body.dark-mode .progress-box:hover {
            background-color: #6366f1;
        }

        /* Message Modal Styles (formerly Confirmation Modal) */
        .message-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
            display: none;
        }
        .message-modal-content {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            text-align: center;
            width: 90%;
            max-width: 350px;
            transform: scale(0.9);
            animation: fadeInScale 0.3s ease-out forwards;
        }
        body.dark-mode .message-modal-content {
            background-color: #2d3748;
            color: #e2e8f0;
        }
        .message-modal-content p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: #2d3748;
        }
        body.dark-mode .message-modal-content p {
            color: #e2e8f0;
        }
        .message-modal-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }
        .message-modal-buttons button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.2s ease;
            border: none;
        }
        .message-modal-buttons .btn-yes {
            background-color: #ef4444;
            color: white;
        }
        .message-modal-buttons .btn-yes:hover {
            background-color: #dc2626;
            transform: translateY(-2px);
        }
        .message-modal-buttons .btn-no {
            background-color: #cbd5e0;
            color: #2d3748;
        }
        body.dark-mode .message-modal-buttons .btn-no {
            background-color: #4a5568;
            color: #e2e8f0;
        }
        .message-modal-buttons .btn-no:hover {
            background-color: #6366f1;
            transform: translateY(-2px);
        }

        /* Unified AI Modal Styles */
        .unified-ai-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1002;
        }
        .unified-ai-modal-content {
            background-color: #ffffff;
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            width: 90%;
            max-width: 600px;
            height: 85vh;
            display: flex;
            flex-direction: column;
            transform: translateY(-20px);
            animation: fadeInScale 0.3s ease-out forwards;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        body.dark-mode .unified-ai-modal-content {
            background-color: #1a202c;
            color: #e2e8f0;
        }
        .unified-ai-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 0;
            border-bottom: none;
        }
        body.dark-mode .unified-ai-modal-header {
            border-bottom-color: #4a5568;
        }
        .gemini-title-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .gemini-title-container span:first-child {
            font-size: 1.2rem;
            font-weight: 600;
        }
        .gemini-title-container .gemini-version {
            font-size: 0.8rem;
            color: #718096;
        }
        body.dark-mode .gemini-title-container .gemini-version {
             color: #a0aec0;
        }
        .user-profile-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: #4f46e5;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
        }
        body.dark-mode .user-profile-icon {
            background-color: #6366f1;
        }

        .unified-ai-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        /* Chat Specific Styles (within unified modal) */
        .chat-messages {
            flex-grow: 1;
            overflow-y: auto;
            padding: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            position: relative;
        }
        .chat-initial-state {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 1rem;
        }
        .chat-initial-state h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #4f46e5;
            margin-bottom: 2rem;
        }
        body.dark-mode .chat-initial-state h1 {
            color: #818cf8;
        }
        .suggestion-chips {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem;
        }
        .suggestion-chip {
            background-color: #edf2f7;
            color: #4a5568;
            padding: 0.6rem 1rem;
            border-radius: 1rem;
            border: 1px solid #e2e8f0;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.2s ease;
        }
        .suggestion-chip:hover {
            background-color: #e2e8f0;
        }
        body.dark-mode .suggestion-chip {
            background-color: #2d3748;
            color: #e2e8f0;
            border-color: #4a5568;
        }
        body.dark-mode .suggestion-chip:hover {
            background-color: #4a5568;
        }
        .chat-message {
            max-width: 80%;
            padding: 0.75rem 1rem;
            border-radius: 1rem;
            font-size: 0.95rem;
            line-height: 1.4;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        .chat-message.user {
            align-self: flex-end;
            background-color: #4f46e5;
            color: white;
            border-bottom-right-radius: 0;
        }
        body.dark-mode .chat-message.user {
            background-color: #4338ca;
            color: #e0f2fe;
        }
        .chat-message.ai {
            align-self: flex-start;
            background-color: #edf2f7;
            color: #2d3748;
            border-bottom-left-radius: 0;
        }
        body.dark-mode .chat-message.ai {
            align-self: flex-start;
            background-color: #4a5568;
            color: #e2e8f0;
        }
        .chat-input-container-new {
            padding-top: 1rem;
        }
        .main-input-bar {
            display: flex;
            align-items: center;
            background-color: #edf2f7;
            border-radius: 1.5rem;
            padding: 0.25rem 0.5rem;
        }
        body.dark-mode .main-input-bar {
            background-color: #2d3748;
        }
        .chat-input-new {
            flex-grow: 1;
            border: none;
            background: transparent;
            padding: 0.75rem;
            font-size: 1rem;
            outline: none;
            color: #2d3748;
        }
        body.dark-mode .chat-input-new {
            color: #e2e8f0;
        }
        body.dark-mode .chat-input-new::placeholder {
            color: #a0aec0;
        }
        .input-icons {
            display: flex;
            gap: 0.25rem;
        }
        .secondary-actions {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 0.25rem;
        }
        .icon-button-plus {
            background-color: #edf2f7;
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            font-size: 1.5rem;
            font-weight: 300;
            color: #4a5568;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 0.2s;
        }
        .icon-button-plus:hover {
            background-color: #e2e8f0;
        }
        body.dark-mode .icon-button-plus {
            background-color: #2d3748;
            color: #e2e8f0;
        }
        body.dark-mode .icon-button-plus:hover {
            background-color: #4a5568;
        }
        .action-chip {
             background-color: #edf2f7;
            color: #4a5568;
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            border: 1px solid #e2e8f0;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.2s ease;
        }
        .action-chip:hover {
            background-color: #e2e8f0;
        }
        body.dark-mode .action-chip {
            background-color: #2d3748;
            color: #e2e8f0;
            border-color: #4a5568;
        }
        body.dark-mode .action-chip:hover {
            background-color: #4a5568;
        }


        /* Notes Interface Styles */
        .notes-interface-container {
            flex-grow: 1;
            margin: 1rem auto; /* Added auto for horizontal centering */
            padding: 2rem;
            background-color: #ffffff;
            border-radius: 0.75rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            display: none; /* Hidden by default */
            flex-direction: column;
            align-items: center;
            text-align: left;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            max-width: 1000px; /* Limit max-width for better appearance on large screens */
            position: relative; /* For FAB positioning */
            /* Removed user-select properties to allow text selection */
        }
        body.dark-mode .notes-interface-container {
            background-color: #2d3748;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
            border-color: #4a5568;
        }
        .notes-interface-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 700px;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid #e2e8f0;
            transition: border-color 0.3s ease;
        }
        body.dark-mode .notes-interface-header {
            border-bottom-color: #4a5568;
        }
        .notes-interface-header h2 {
            font-size: 2.6rem;
            font-weight: 800;
            color: #2d3748;
            transition: color 0.3s ease;
        }

        /* Notes List Container (replaces notes-content-area and notes-tab-pane) */
        .notes-list-container {
            flex-grow: 1;
            overflow-y: auto;
            width: 100%;
            max-width: 700px;
            padding: 1rem 0; /* Add some vertical padding */
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Responsive grid for cards */
            gap: 1rem; /* Space between cards */
            align-items: flex-start; /* Align cards to the top */
        }

        /* Individual Note Card */
        .note-card {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 0.75rem;
            padding: 1rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            position: relative; /* For delete button positioning */
            /* Removed user-select properties to allow text selection */
        }
        body.dark-mode .note-card {
            background-color: #4a5568;
            border-color: #6366f1;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .note-card-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 0.5rem;
            border: none;
            background: transparent;
            width: 100%;
            outline: none;
            resize: none; /* Prevent manual resize */
            overflow: hidden; /* Hide scrollbar */
            transition: color 0.3s ease;
        }
        body.dark-mode .note-card-title {
            color: #e2e8f0;
        }
        .note-card-title::placeholder {
            color: #a0aec0;
        }

        .note-card-textarea {
            flex-grow: 1;
            width: 100%;
            min-height: 80px;
            border: none;
            background: transparent;
            font-size: 0.95rem;
            line-height: 1.5;
            color: #4a5568;
            outline: none;
            resize: vertical; /* Allow vertical resize for text notes */
            transition: color 0.3s ease;
        }
        body.dark-mode .note-card-textarea {
            color: #e2e8f0;
        }
        .note-card-textarea::placeholder {
            color: #a0aec0;
        }

        .note-card .checklist-container {
            padding: 0; /* Override default checklist padding */
            border: none; /* Override default checklist border */
            background: transparent; /* Override default checklist background */
            margin-bottom: 0; /* Remove bottom margin */
            gap: 0.5rem; /* Smaller gap for checklist items within card */
        }

        .note-card .checklist-item {
            padding: 0.2rem 0; /* Smaller padding for checklist items within card */
            display: flex; /* Use flexbox for checklist items */
            align-items: center;
            gap: 0.5rem;
        }
        .note-card .checklist-item input[type="checkbox"] {
            flex-shrink: 0; /* Prevent checkbox from shrinking */
            transform: scale(1.1); /* Slightly larger checkbox */
            accent-color: #4f46e5;
        }
        .note-card .checklist-item .item-text {
            flex-grow: 1; /* Allow text to take available space */
            word-break: break-word; /* Break long words */
        }
        .note-card .checklist-item.completed .item-text {
            text-decoration: line-through;
            color: #718096; /* Gray out completed items */
        }
        body.dark-mode .note-card .checklist-item.completed .item-text {
            color: #a0aec0;
        }
        .note-card .checklist-item .delete-item-button {
            background: none;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            color: #ef4444;
            transition: color 0.2s ease;
            flex-shrink: 0; /* Prevent button from shrinking */
        }
        .note-card .checklist-item .delete-item-button:hover {
            color: #dc2626;
        }

        .note-card .add-checklist-item-container {
            display: flex;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }

        .note-card .add-checklist-item-container input {
            flex-grow: 1;
            padding: 0.4rem 0.6rem;
            border: 1px solid #cbd5e0;
            border-radius: 0.375rem;
            font-size: 0.9rem;
            outline: none;
        }
        body.dark-mode .note-card .add-checklist-item-container input {
            background-color: #2d3748;
            border-color: #4a5568;
            color: #e2e8f0;
        }
        body.dark-mode .note-card .add-checklist-item-container input::placeholder {
            color: #a0aec0;
        }

        .note-card .add-checklist-item-container button {
            background-color: #4f46e5;
            color: white;
            padding: 0.4rem 0.8rem;
            border-radius: 0.375rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            transition: background-color 0.2s ease;
        }
        body.dark-mode .note-card .add-checklist-item-container button {
            background-color: #6366f1;
        }
        .note-card .add-checklist-item-container button:hover {
            background-color: #4338ca;
        }
        body.dark-mode .note-card .add-checklist-item-container button:hover {
            background-color: #4f46e5;
        }

        /* New delete note button style */
        .delete-note-button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            line-height: 1;
            color: #ef4444;
            cursor: pointer;
            padding: 0.2rem;
            border-radius: 50%;
            transition: background-color 0.2s ease, color 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
        }
        .delete-note-button:hover {
            background-color: rgba(239, 68, 68, 0.1);
            color: #dc2626;
        }
        body.dark-mode .delete-note-button {
            color: #fca5a5;
        }
        body.dark-mode .delete-note-button:hover {
            background-color: rgba(239, 68, 68, 0.2);
            color: #ef4444;
        }


        /* Floating Action Button (FAB) */
        .fab-button {
            position: fixed; /* Changed to fixed for consistent positioning */
            bottom: 2rem;
            right: 2rem;
            background-color: #4f46e5; /* Indigo */
            color: white;
            border: none;
            border-radius: 50%;
            width: 56px;
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(79, 70, 229, 0.4);
            transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
            z-index: 100; /* Ensure it's above other content */
        }
        body.dark-mode .fab-button {
            background-color: #6366f1;
            box-shadow: 0 4px 10px rgba(99, 102, 241, 0.5);
        }
        .fab-button:hover {
            background-color: #4338ca;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(79, 70, 229, 0.5);
        }
        body.dark-mode .fab-button:hover {
            background-color: #4f46e5;
        }
        .fab-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(79, 70, 229, 0.3);
        }
        .fab-button svg {
            width: 30px;
            height: 30px;
        }

        /* FAB Options Container */
        .fab-options-container {
            position: fixed; /* Fixed positioning */
            bottom: calc(2rem + 56px + 1rem); /* Above FAB with some space */
            right: 2rem;
            background-color: #ffffff;
            border-radius: 0.75rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            padding: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            z-index: 101; /* Above FAB */
            transform: translateY(20px); /* Start slightly below final position */
            opacity: 0;
            pointer-events: none; /* Prevent interaction when hidden */
            transition: transform 0.2s ease-out, opacity 0.2s ease-out;
        }
        body.dark-mode .fab-options-container {
            background-color: #2d3748;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }
        .fab-options-container.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto; /* Enable interaction when active */
        }
        .fab-option-button {
            background: none;
            border: none;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            text-align: left;
            font-size: 1rem;
            color: #2d3748;
            cursor: pointer;
            transition: background-color 0.2s ease, color 0.2s ease;
            display: flex; /* Use flexbox for icon and text alignment */
            align-items: center;
            gap: 8px; /* Space between icon and text */
        }
        body.dark-mode .fab-option-button {
            color: #e2e8f0;
        }
        .fab-option-button:hover {
            background-color: #edf2f7;
        }
        body.dark-mode .fab-option-button:hover {
            background-color: #4a5568;
        }

        /* Removed .save-notes-button styles and .fab-input-container */


        /* Responsive adjustments */
        @media (max-width: 768px) {
            .test-container, .pre-submit-review-container, .summary-container, .notes-interface-container, .flashcards-interface-container {
                flex-direction: column;
                margin: 0.5rem auto;
                padding: 1rem;
            }
            .sidebar {
                width: 100%;
                border-right: none;
                border-bottom: 1px solid #e2e8f0;
                padding: 1rem;
            }
            .main-content {
                padding: 1rem;
                padding-bottom: 80px;
            }
            .header {
                flex-direction: column;
                gap: 0.5rem;
                padding: 1rem;
            }
            /* Removed .time-left responsive styles */
            .home-container {
                flex-direction: column; /* Stack vertically on small screens */
                align-items: center;
                gap: 1.5rem;
                padding: 1rem;
                max-width: 100%;
                margin: 0 auto; /* Ensure no side margins on small screens */
            }
            .home-welcome-section {
                padding: 0;
                flex: 1 1 100%; /* Take full width on small screens */
                min-width: unset; /* Remove min-width constraint */
            }
            .home-container .subject-selection {
                max-width: 100%;
                flex: 1 1 100%; /* Take full width on small screens */
                min-width: unset; /* Remove min-width constraint */
            }
            .home-container h1 {
                font-size: 2.2rem;
            }
            .home-container .website-name {
                font-size: 1rem;
            }
            .home-container .subject-grid {
                flex-direction: column; /* Ensure vertical stacking on small screens */
            }
            .subject-selection {
                padding: 1.5rem;
            }
            .subject-selection h3 {
                font-size: 1.5rem;
            }
            .subject-item {
                padding: 0.8rem;
                font-size: 0.9rem;
            }
            .theme-toggle-button {
                top: 0.75rem;
                right: 0.75rem;
                width: 35px;
                height: 35px;
                font-size: 1rem;
            }
            .unified-ai-modal-content {
                height: 90vh;
                max-width: 95%;
                padding: 1rem;
            }
            .review-table-header, .review-table-row {
                grid-template-columns: 0.5fr 2fr 1fr;
                font-size: 0.85rem;
            }
            .review-table-cell-text {
                white-space: normal;
            }
            .review-table-cell-status {
                flex-direction: column;
                align-items: flex-end;
            }
            .status-badge {
                margin-left: 0;
                margin-bottom: 0.25rem;
            }
            .question-block {
                padding: 1rem;
            }
            .question-number {
                font-size: 1.1rem;
            }
            .question-text {
                font-size: 1rem;
            }
            .options-list {
                grid-template-columns: 1fr; /* Revert to single column on smaller screens */
            }
            .options-list label {
                font-size: 0.95rem;
            }
            .options-list input[type="radio"] {
                transform: scale(1.1);
            }
            .submit-button, .confirm-submit-button, .action-button-summary, .ai-button, .notes-interface-button, .flashcards-interface-button {
                padding: 0.7rem 1.5rem;
                font-size: 1rem;
                width: auto; /* Allow buttons to shrink on mobile */
                height: auto;
            }
            .chat-message {
                font-size: 0.85rem;
                padding: 0.6rem 0.8rem;
            }
            .chat-input-container-new {
                flex-wrap: wrap;
            }
            .chat-input-new {
                flex-basis: 100%;
                margin-bottom: 0.5rem;
            }
            .notes-interface-container, .flashcards-interface-container {
                padding: 0.75rem;
            }
            .notes-interface-header h2, .flashcards-interface-header h2 {
                font-size: 1.5rem;
            }
            .notes-list-container {
                grid-template-columns: 1fr; /* Stack notes vertically on small screens */
                padding-bottom: 60px; /* Adjust for smaller FAB */
            }
            .note-card {
                padding: 0.75rem;
            }
            .note-card-title {
                font-size: 1rem;
            }
            .note-card-textarea {
                font-size: 0.9rem;
                min-height: 60px;
            }
            .checklist-item {
                padding: 0.3rem 0;
            }
            .checklist-item .item-text {
                font-size: 0.9rem;
            }
            .fab-button {
                bottom: 1rem;
                right: 1rem;
                width: 48px;
                height: 48px;
                font-size: 1.8rem;
            }
            .fab-button svg {
                width: 24px;
                height: 24px;
            }
            .fab-options-container {
                bottom: calc(1rem + 48px + 0.75rem); /* Adjust position for smaller FAB */
                right: 1rem;
                width: calc(100% - 2rem); /* Full width minus margins */
            }
            .fab-option-button {
                font-size: 0.8rem;
                padding: 0.5rem 0.7rem;
            }

            /* Flashcards specific responsive adjustments */
            .flashcard-card {
                width: 100%; /* Full width on small screens */
                height: 250px; /* Adjust height */
                font-size: 1.2rem;
            }
            .flashcard-controls {
                flex-direction: column;
                gap: 0.75rem;
            }
            .flashcard-nav-button {
                width: 100%;
            }
            .flashcard-action-button {
                width: 100%;
            }
        }

        /* Added basic styling for ai-response-display */
        .ai-response-display {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            padding: 1rem;
            margin-top: 1rem;
            max-height: 200px; /* Limit height and make scrollable */
            overflow-y: auto;
            color: #2d3748;
            line-height: 1.5;
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        body.dark-mode .ai-response-display {
            background-color: #2d3748;
            border-color: #4a5568;
            color: #e2e8f0;
        }

        /* New styles for AI loading indicator */
        .ai-loading-indicator {
            display: flex;
            align-items: center;
            align-self: flex-start; /* Align with AI messages */
            padding: 0.75rem 1rem;
            border-radius: 1rem;
            border-bottom-left-radius: 0;
            background-color: #edf2f7; /* Same as AI message background */
            color: #2d3748;
            font-size: 0.95rem;
            gap: 0.5rem;
            margin-top: 0.75rem; /* Space from previous message */
            max-width: 80%;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        body.dark-mode .ai-loading-indicator {
            background-color: #4a5568;
            color: #e2e8f0;
        }

        .ai-loading-spinner {
            border: 3px solid rgba(0, 0, 0, 0.1);
            border-top: 3px solid #4f46e5; /* Indigo color for spinner */
            border-radius: 50%;
            width: 18px;
            height: 18px;
            animation: spin 1s linear infinite;
        }

        body.dark-mode .ai-loading-spinner {
            border-top: 3px solid #6366f1; /* Lighter indigo for dark mode spinner */
        }

        /* Animation for spinner */
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Flashcard specific styles */
        .flashcards-interface-container {
            flex-grow: 1;
            margin: 1rem auto;
            padding: 2rem;
            background-color: #ffffff;
            border-radius: 0.75rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            display: none;
            flex-direction: column;
            align-items: center;
            text-align: center; /* Center content horizontally */
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            max-width: 1000px;
            position: relative;
        }
        body.dark-mode .flashcards-interface-container {
            background-color: #2d3748;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
            border-color: #4a5568;
        }
        .flashcards-interface-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 700px;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid #e2e8f0;
            transition: border-color 0.3s ease;
        }
        body.dark-mode .flashcards-interface-header {
            border-bottom-color: #4a5568;
        }
        .flashcards-interface-header h2 {
            font-size: 2.6rem;
            font-weight: 800;
            color: #2d3748;
            transition: color 0.3s ease;
        }

        /* Flashcard Container and Flip Effect */
        .flashcard-display-area {
            width: 100%;
            max-width: 500px; /* Max width for the card */
            height: 300px; /* Fixed height for consistency */
            perspective: 1000px; /* For 3D flip effect */
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .flashcard-card {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s;
            border-radius: 1rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            font-size: 1.5rem;
            font-weight: 600;
            color: #2d3748;
            text-align: center;
            padding: 1rem;
            box-sizing: border-box;
        }
        body.dark-mode .flashcard-card {
            background-color: #4a5568;
            border-color: #6366f1;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        }

        .flashcard-card.flipped {
            transform: rotateY(180deg);
        }

        .flashcard-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            box-sizing: border-box;
            border-radius: 1rem; /* Match card border-radius */
            overflow: auto; /* Allow scrolling for long content */
        }

        .flashcard-front {
            background-color: inherit; /* Inherit from card for consistency */
            color: inherit;
        }

        .flashcard-back {
            background-color: inherit; /* Inherit from card */
            color: inherit;
            transform: rotateY(180deg);
        }

        .flashcard-content-text {
            word-break: break-word; /* Break long words */
            white-space: pre-wrap; /* Preserve whitespace and wrap text */
        }

        /* Flashcard Controls */
        .flashcard-controls {
            display: flex;
            justify-content: center;
            gap: 1rem;
            width: 100%;
            max-width: 500px;
            margin-top: 1rem;
        }

        .flashcard-action-button, .flashcard-nav-button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .flashcard-action-button {
            background-color: #4f46e5; /* Indigo */
            color: white;
        }
        body.dark-mode .flashcard-action-button {
            background-color: #6366f1;
        }
        .flashcard-action-button:hover {
            background-color: #4338ca;
            transform: translateY(-2px);
        }
        body.dark-mode .flashcard-action-button:hover {
            background-color: #4f46e5;
        }

        .flashcard-nav-button {
            background-color: #cbd5e0; /* Light gray */
            color: #2d3748;
        }
        body.dark-mode .flashcard-nav-button {
            background-color: #4a5568;
            color: #e2e8f0;
        }
        .flashcard-nav-button:hover {
            background-color: #a0aec0;
            transform: translateY(-2px);
        }
        body.dark-mode .flashcard-nav-button:hover {
            background-color: #6366f1;
        }

        .flashcard-count {
            font-size: 1rem;
            color: #718096;
            margin-top: 1rem;
            transition: color 0.3s ease;
        }
        body.dark-mode .flashcard-count {
            color: #a0aec0;
        }

        /* Confirmation Modal for deleting flashcards */
        .confirm-modal-overlay#deleteFlashcardConfirmModal {
            z-index: 1003; /* Higher than other modals if needed */
        }

        /* New Flashcard Input Modal */
        .new-flashcard-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1004;
        }
        .new-flashcard-modal-content {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            width: 90%;
            max-width: 450px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            transform: scale(0.9);
            animation: fadeInScale 0.3s ease-out forwards;
        }
        body.dark-mode .new-flashcard-modal-content {
            background-color: #2d3748;
            color: #e2e8f0;
        }
        .new-flashcard-modal-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 0.5rem;
            transition: color 0.3s ease;
        }
        body.dark-mode .new-flashcard-modal-content h3 {
            color: #e2e8f0;
        }
        .new-flashcard-modal-content textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #cbd5e0;
            border-radius: 0.5rem;
            font-size: 1rem;
            min-height: 80px;
            resize: vertical;
            outline: none;
            background-color: #f8fafc;
            color: #2d3748;
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        body.dark-mode .new-flashcard-modal-content textarea {
            background-color: #4a5568;
            border-color: #6366f1;
            color: #e2e8f0;
        }
        body.dark-mode .new-flashcard-modal-content textarea::placeholder {
            color: #a0aec0;
        }
        .new-flashcard-modal-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            margin-top: 1rem;
        }
        .new-flashcard-modal-buttons button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.2s ease;
            border: none;
        }
        .new-flashcard-modal-buttons .btn-cancel {
            background-color: #cbd5e0;
            color: #2d3748;
        }
        body.dark-mode .new-flashcard-modal-buttons .btn-cancel {
            background-color: #4a5568;
            color: #e2e8f0;
        }
        .new-flashcard-modal-buttons .btn-cancel:hover {
            background-color: #a0aec0;
        }
        body.dark-mode .new-flashcard-modal-buttons .btn-cancel:hover {
            background-color: #6366f1;
        }
        .new-flashcard-modal-buttons .btn-add {
            background-color: #10b981;
            color: white;
        }
        body.dark-mode .new-flashcard-modal-buttons .btn-add {
            background-color: #059669;
        }
        .new-flashcard-modal-buttons .btn-add:hover {
            background-color: #059669;
        }
        body.dark-mode .new-flashcard-modal-buttons .btn-add:hover {
            background-color: #14532d;
        }

        /* New Flashcard Folder/Set Specific Styles */
        .flashcard-list-container { /* Generic container for folders or sets */
            flex-grow: 1;
            overflow-y: auto;
            width: 100%;
            max-width: 700px;
            padding: 1rem 0;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1rem;
            align-items: flex-start;
        }

        .flashcard-folder-item, .flashcard-set-item {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        }
        body.dark-mode .flashcard-folder-item, body.dark-mode .flashcard-set-item {
            background-color: #4a5568;
            border-color: #6366f1;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .flashcard-folder-item:hover, .flashcard-set-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        body.dark-mode .flashcard-folder-item:hover, body.dark-mode .flashcard-set-item:hover {
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        .flashcard-folder-item .icon, .flashcard-set-item .icon {
            width: 60px;
            height: 60px;
            margin-bottom: 0.75rem;
            color: #4f46e5; /* Indigo color for icons */
        }
        body.dark-mode .flashcard-folder-item .icon, body.dark-mode .flashcard-set-item .icon {
            color: #6366f1;
        }

        .flashcard-folder-item .name, .flashcard-set-item .name {
            font-size: 1.2rem;
            font-weight: 600;
            color: #2d3748;
            text-align: center;
            word-break: break-word;
            transition: color 0.3s ease;
        }
        body.dark-mode .flashcard-folder-item .name, body.dark-mode .flashcard-set-item .name {
            color: #e2e8f0;
        }

        .flashcard-folder-item .subject, .flashcard-set-item .card-count {
            font-size: 0.9rem;
            color: #718096;
            margin-top: 0.25rem;
            transition: color 0.3s ease;
        }
        body.dark-mode .flashcard-folder-item .subject, body.dark-mode .flashcard-set-item .card-count {
            color: #a0aec0;
        }

        .item-options-button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: #718096;
            padding: 0.2rem;
            border-radius: 50%;
            transition: background-color 0.2s ease, color 0.2s ease;
        }
        .item-options-button:hover {
            background-color: #e2e8f0;
            color: #4a5568;
        }
        body.dark-mode .item-options-button {
            color: #a0aec0;
        }
        body.dark-mode .item-options-button:hover {
            background-color: #4a5568;
            color: #e2e8f0;
        }

        .item-options-menu {
            position: absolute;
            top: 2.5rem;
            right: 0.5rem;
            background-color: #ffffff;
            border-radius: 0.5rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            display: none;
            flex-direction: column;
            z-index: 10;
            min-width: 120px;
            overflow: hidden; /* Ensures rounded corners on children */
        }
        body.dark-mode .item-options-menu {
            background-color: #2d3748;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }
        .item-options-menu.active {
            display: flex;
        }

        .item-options-menu button {
            background: none;
            border: none;
            padding: 0.75rem 1rem;
            text-align: left;
            cursor: pointer;
            font-size: 0.95rem;
            color: #2d3748;
            transition: background-color 0.2s ease, color 0.2s ease;
        }
        body.dark-mode .item-options-menu button {
            color: #e2e8f0;
        }
        .item-options-menu button:hover {
            background-color: #edf2f7;
        }
        body.dark-mode .item-options-menu button:hover {
            background-color: #4a5568;
        }
        .item-options-menu button:not(:last-child) {
            border-bottom: 1px solid #e2e8f0;
        }
        body.dark-mode .item-options-menu button:not(:last-child) {
            border-bottom: 1px solid #4a5568;
        }
        .item-options-menu button.delete-option {
            color: #ef4444;
        }
        body.dark-mode .item-options-menu button.delete-option {
            color: #fca5a5;
        }
        .item-options-menu button.delete-option:hover {
            background-color: #fee2e2;
        }
        body.dark-mode .item-options-menu button.delete-option:hover {
            background-color: rgba(239, 68, 68, 0.2);
        }

        /* New Modal for Folder/Set Creation/Editing */
        .new-item-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1005;
        }
        .new-item-modal-content {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            width: 90%;
            max-width: 450px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            transform: scale(0.9);
            animation: fadeInScale 0.3s ease-out forwards;
        }
        body.dark-mode .new-item-modal-content {
            background-color: #2d3748;
            color: #e2e8f0;
        }
        .new-item-modal-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 0.5rem;
            transition: color 0.3s ease;
        }
        body.dark-mode .new-item-modal-content h3 {
            color: #e2e8f0;
        }
        .new-item-modal-content input[type="text"],
        .new-item-modal-content select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #cbd5e0;
            border-radius: 0.5rem;
            font-size: 1rem;
            outline: none;
            background-color: #f8fafc;
            color: #2d3748;
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        body.dark-mode .new-item-modal-content input[type="text"],
        body.dark-mode .new-item-modal-content select {
            background-color: #4a5568;
            border-color: #6366f1;
            color: #e2e8f0;
        }
        body.dark-mode .new-item-modal-content input[type="text"]::placeholder {
            color: #a0aec0;
        }
        .new-item-modal-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            margin-top: 1rem;
        }
        .new-item-modal-buttons button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.2s ease;
            border: none;
        }
        .new-item-modal-buttons .btn-cancel {
            background-color: #cbd5e0;
            color: #2d3748;
        }
        body.dark-mode .new-item-modal-buttons .btn-cancel {
            background-color: #4a5568;
            color: #e2e8f0;
        }
        .new-item-modal-buttons .btn-cancel:hover {
            background-color: #a0aec0;
        }
        body.dark-mode .new-item-modal-buttons .btn-cancel:hover {
            background-color: #6366f1;
        }
        .new-item-modal-buttons .btn-add {
            background-color: #10b981;
            color: white;
        }
        body.dark-mode .new-item-modal-buttons .btn-add {
            background-color: #059669;
        }
        .new-item-modal-buttons .btn-add:hover {
            background-color: #059669;
        }
        body.dark-mode .new-item-modal-buttons .btn-add:hover {
            background-color: #14532d;
        }
        /* Breadcrumbs for navigation */
        .flashcard-breadcrumbs {
            width: 100%;
            max-width: 700px;
            text-align: left;
            margin-bottom: 1rem;
            font-size: 1rem;
            color: #718096;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        body.dark-mode .flashcard-breadcrumbs {
            color: #a0aec0;
        }
        .flashcard-breadcrumbs span {
            cursor: pointer;
            font-weight: 500;
        }
        .flashcard-breadcrumbs span:hover {
            text-decoration: underline;
        }
        .flashcard-breadcrumbs span.current {
            font-weight: 700;
            color: #2d3748;
            cursor: default;
            text-decoration: none;
        }
        body.dark-mode .flashcard-breadcrumbs span.current {
            color: #e2e8f0;
        }
        .flashcard-breadcrumbs .separator {
            color: #cbd5e0;
        }
        body.dark-mode .flashcard-breadcrumbs .separator {
            color: #4a5568;
        }
        /* Loader for flashcard content */
        .flashcard-loader-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            min-height: 200px; /* Ensure it takes up space */
            color: #4f46e5;
            font-weight: 600;
            font-size: 1.2rem;
            flex-direction: column;
            gap: 1rem;
        }
        .flashcard-loader {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-top: 4px solid #4f46e5;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }
        body.dark-mode .flashcard-loader {
            border-top: 4px solid #6366f1;
        }
    </style>
</head>
<body>

<div id="appContainer">
    <!-- Header: Shown for test, review, and summary pages -->
    <header class="header" id="mainHeader" style="display: none;">
        <div class="header-buttons">
            <button class="back-button" id="backButton">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.707 17.293a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 11H18a1 1 0 110 2H8.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </button>
            <button class="home-button" id="homeButton">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M12 2.25l-8.25 7.5h1.5v6a1.5 1.5 0 001.5 1.5h3.75a.75.75 0 00.75-.75v-3h3v3c0 .414.336.75.75.75H18a1.5 1.5 0 001.5-1.5v-6h1.5l-8.25-7.5z" fill-rule="evenodd"></path>
                </svg>
            </button>
        </div>
        <!-- Removed Time Left Display -->
    </header>

    <!-- Home Page -->
    <div class="home-container" id="homeContainer">
        <button class="theme-toggle-button" id="themeToggleButton">
            <span class="dark-mode-icon">🌙</span>
            <span class="light-mode-icon">☀️</span>
        </button>
        <div class="home-welcome-section">
            <h1>Welcome, Biruck!</h1>
            <p class="website-name">Your journey to knowledge starts with Edu Boost</p>
            <!-- AI button is now first -->
            <button class="ai-button" id="aiButton">AI</button>
            <!-- Notes button is now a separate interface -->
            <button class="notes-interface-button" id="notesInterfaceButton">Notes</button>
            <!-- Flashcards button -->
            <button class="flashcards-interface-button" id="flashcardsInterfaceButton">Flashcards</button>
        </div>
        <div class="subject-selection">
            <h3>Choose Your Subject</h3>
            <div class="subject-grid">
                <button class="subject-item" data-subject="English">English</button>
                <button class="subject-item" data-subject="Mathematics">Mathematics</button>
                <button class="subject-item" data-subject="Physics">Physics</button>
                <button class="subject-item" data-subject="SAT">SAT</button>
                <button class="subject-item" data-subject="Biology">Biology</button>
                <button class="subject-item" data-subject="Chemistry">Chemistry</button>
            </div>
            <!-- Removed Start Test Button -->
        </div>
    </div>

    <!-- Test Mode Selection Modal -->
    <div class="test-mode-modal-overlay" id="testModeModal">
        <div class="test-mode-modal-content">
            <h3>Select Test Mode</h3>
            <div class="test-mode-option">
                <input id="modePractice" name="testMode" type="radio" value="practice"/>
                <label for="modePractice">
                    <span>Practice Mode</span><br/>
                    Review answers immediately after each question.
                </label>
            </div>
            <div class="test-mode-option">
                <input id="modeTest" name="testMode" type="radio" value="test"/>
                <label for="modeTest">
                    <span>Test Mode</span><br/>
                    Review answers after completing the entire test.
                </label>
            </div>
            <!-- Removed Start Test Button -->
        </div>
    </div>

    <!-- Main Test Section -->
    <div class="test-container" id="testContainer" style="display: none;">
        <div class="sidebar" id="questionSidebar">
            <!-- Question numbers will be dynamically loaded here -->
        </div>
        <div class="main-content">
            <div id="questionsContainer">
                <!-- Questions will be dynamically loaded here -->
            </div>
            <button class="submit-button" id="submitTestButton">Submit Test</button>
        </div>
    </div>

    <!-- Test Progress Footer -->
    <div class="test-progress-footer" id="testProgressFooter" style="display: none;">
        <!-- Progress boxes will be dynamically loaded here -->
    </div>

    <!-- Pre-Submit Review Page -->
    <div class="pre-submit-review-container" id="preSubmitReviewContainer">
        <h2>Review Your Test</h2>
        <div class="review-section">
            <h3 class="section-title">Flagged Questions</h3>
            <div class="review-table-container">
                <div class="review-table-header">
                    <div class="review-table-cell">#</div>
                    <div class="review-table-cell">Question Text</div>
                    <div class="review-table-cell">Status</div>
                </div>
                <div id="preSubmitFlaggedList">
                    <!-- Flagged questions will be loaded here -->
                </div>
            </div>
        </div>
        <div class="review-section">
            <h3 class="section-title">Unanswered Questions</h3>
            <div class="review-table-container">
                <div class="review-table-header">
                    <div class="review-table-cell">#</div>
                    <div class="review-table-cell">Question Text</div>
                    <div class="review-table-cell">Status</div>
                </div>
                <div id="preSubmitUnansweredList">
                    <!-- Unanswered questions will be loaded here -->
                </div>
            </div>
        </div>
        <button class="confirm-submit-button" id="confirmSubmitButton">Confirm & Submit</button>
        <button class="action-button-summary" id="checkQuestionsAgainButton">Check Questions Again</button>
    </div>

    <!-- Generic Message/Confirmation Modal -->
    <div class="message-modal-overlay" id="messageModal">
        <div class="message-modal-content">
            <p id="messageModalText"></p>
            <div class="message-modal-buttons">
                <!-- Buttons will be dynamically added here by JS -->
            </div>
        </div>
    </div>

    <!-- Confirmation Modal (for deleting notes) -->
    <div class="confirm-modal-overlay" id="deleteNoteConfirmModal">
        <div class="confirm-modal-content">
            <p>Are you sure you want to delete this note?</p>
            <div class="confirm-modal-buttons">
                <button class="btn-yes" id="deleteNoteConfirmYes">Yes, Delete</button>
                <button class="btn-no" id="deleteNoteConfirmNo">No, Cancel</button>
            </div>
        </div>
    </div>

    <!-- Confirmation Modal (for deleting flashcards) -->
    <div class="confirm-modal-overlay" id="deleteFlashcardConfirmModal">
        <div class="confirm-modal-content">
            <p>Are you sure you want to delete this flashcard?</p>
            <div class="confirm-modal-buttons">
                <button class="btn-yes" id="deleteFlashcardConfirmYes">Yes, Delete</button>
                <button class="btn-no" id="deleteFlashcardConfirmNo">No, Cancel</button>
            </div>
        </div>
    </div>

    <!-- Summary Page -->
    <div class="summary-container" id="summaryContainer">
        <h2>Test Summary</h2>
        <p class="summary-score" id="finalScoreDisplay">Your Score: --/--</p>

        <div class="summary-section">
            <h3 class="section-title">All Questions Review</h3>
            <div class="review-table-container">
                <div class="review-table-header">
                    <div class="review-table-cell">#</div>
                    <div class="review-table-cell">Question Text</div>
                    <div class="review-table-cell">Status</div>
                </div>
                <div id="allQuestionsReviewList">
                    <!-- All questions and their status will be loaded here -->
                </div>
            </div>
        </div>

        <button class="action-button-summary" id="retakeTestButton">Retake Test</button>
    </div>

    <!-- Unified AI Modal -->
    <div class="unified-ai-modal-overlay" id="unifiedAiModal">
        <div class="unified-ai-modal-content">
            <div class="unified-ai-modal-header">
                 <div class="gemini-title-container">
                    <span>Gemini</span>
                    <span class="gemini-version">2.5 Flash ▼</span>
                </div>
                <button class="icon-button" id="unifiedAiModalCloseButton" title="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="unified-ai-content">
                <div class="chat-messages" id="chatMessages">
                    <div class="ai-loading-indicator" id="aiLoadingIndicator" style="display: none;">
                        <div class="ai-loading-spinner"></div>
                        <span>Just a sec...</span>
                    </div>
                    <div class="chat-initial-state" id="chatInitialState">
                        <h1>Hello, Biruck</h1>
                        <div class="suggestion-chips">
                            <span class="suggestion-chip" data-prompt="Explain a complex topic in simple terms.">Explain a complex topic in simple terms.</span>
                            <span class="suggestion-chip" data-prompt="Give me a study plan for upcoming exams.">Give me a study plan for upcoming exams.</span>
                            <span class="suggestion-chip" data-prompt="Summarize the key points of [topic].">Summarize the key points of [topic].</span>
                            <span class="suggestion-chip" data-prompt="Research a topic">Research a topic</span>
                        </div>
                    </div>
                    <!-- Chat messages will be appended here -->

                </div>
                <div class="chat-input-container-new" id="newChatInputContainer">
                    <div class="main-input-bar">
                        <input class="chat-input-new" id="chatInput" placeholder="Ask Gemini"/>
                        <div class="input-icons">
                            <button class="icon-button" id="sendButton" title="Send">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </div>
                    </div>
                    <div class="secondary-actions">
                        <button class="icon-button-plus" id="addImageButton" title="Add Image">
                           +
                        </button>
                    </div>
                </div>
                <input accept="image/*" id="imageUpload" style="display: none;" type="file"/>
                <div class="mt-2" id="imagePreviewContainer" style="display:none; text-align: center;">
                    <img id="imagePreview" src="#" alt="Image Preview" style="max-width: 100%; max-height: 150px; border-radius: 8px; margin-top: 10px;"/>
                    <p id="imageFileName" class="text-sm text-gray-500"></p>
                </div>
            </div>
        </div>
    </div>

    <!-- Notes Interface Page (formerly Notes Modal) -->
    <div class="notes-interface-container" id="notesInterfaceContainer" style="display: none;">
        <div class="notes-interface-header">
            <h2>My Notes</h2>
        </div>
        <div class="notes-list-container" id="notesListContainer">
            <!-- Note cards will be loaded here -->
        </div>
        <!-- Floating Action Button for adding new notes -->
        <button class="fab-button" id="addNoteFab">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
        <!-- FAB Options Container (hidden by default) -->
        <div class="fab-options-container" id="fabOptionsContainer">
            <button class="fab-option-button" id="addTextNoteButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="margin-right:8px;">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
                Add Text Note
            </button>
            <button class="fab-option-button" id="addChecklistNoteButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" style="margin-right:8px;">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
                Add Checklist
            </button>
        </div>
    </div>

    <!-- Flashcards Interface Page -->
    <div class="flashcards-interface-container" id="flashcardsInterfaceContainer" style="display: none;">
        <div class="flashcards-interface-header">
            <h2 id="flashcardsHeaderTitle">My Flashcards</h2>
            <div id="flashcardBreadcrumbs" class="flashcard-breadcrumbs" style="display: none;"></div>
        </div>

        <!-- Section for Folders -->
        <div id="flashcardFoldersSection" class="flashcard-list-container">
            <!-- Folders will be loaded here -->
            <div class="flashcard-loader-container" id="foldersLoader">
                <div class="flashcard-loader"></div>
                Loading Folders...
            </div>
        </div>

        <!-- Section for Sets within a Folder -->
        <div id="flashcardSetsSection" class="flashcard-list-container" style="display: none;">
            <!-- Sets will be loaded here -->
            <div class="flashcard-loader-container" id="setsLoader">
                <div class="flashcard-loader"></div>
                Loading Sets...
            </div>
        </div>

        <!-- Section for Flashcards within a Set -->
        <div id="flashcardsInSection" style="display: none; width: 100%; display: flex; flex-direction: column; align-items: center;">
            <div class="flashcard-display-area" id="flashcardDisplayArea">
                <!-- Flashcard will be loaded here -->
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-nav-button" id="prevFlashcardButton">Previous</button>
                <button class="flashcard-action-button" id="flipFlashcardButton">Flip Card</button>
                <button class="flashcard-nav-button" id="nextFlashcardButton">Next</button>
            </div>
            <p class="flashcard-count" id="flashcardCountDisplay">0/0</p>
        </div>

        <!-- Floating Action Button for adding new flashcards (contextual) -->
        <button class="fab-button" id="addFlashcardFab">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
        <!-- FAB Options for Flashcards (contextual) -->
        <div class="fab-options-container" id="flashcardFabOptionsContainer">
            <button class="fab-option-button" id="addNewFolderButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16" style="margin-right:8px;">
                  <path d="m.5 3 .04.87a1.5 1.5 0 0 0-.342.96L.5 14.5A1.5 1.5 0 0 0 2 16h12a1.5 1.5 0 0 0 1.5-1.5V3.25a1.5 1.5 0 0 0-1.5-1.5H9.5l-.964-.964A1.5 1.5 0 0 0 7.043 0H2.25A1.5 1.5 0 0 0 .75 1.5v1C.75 2.72 1.03 3 1.372 3H.5ZM13.5 6a.5.5 0 0 1 .5.5V9h2.5a.5.5 0 0 1 0 1H14v2.5a.5.5 0 0 1-1 0V10h-2.5a.5.5 0 0 1 0-1H13V6.5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
                Add New Folder
            </button>
            <button class="fab-option-button" id="addNewSetButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16" style="margin-right:8px;">
                  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5 0A.5.5 0 0 1 1 12.5V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-.5.5h-13z"/>
                </svg>
                Add New Set
            </button>
            <button class="fab-option-button" id="addNewFlashcardButtonFromFab">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16" style="margin-right:8px;">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                </svg>
                Add New Flashcard
            </button>
        </div>
    </div>

    <!-- New Flashcard Input Modal (reused for adding flashcards to set) -->
    <div class="new-flashcard-modal-overlay" id="newFlashcardModal">
        <div class="new-flashcard-modal-content">
            <h3>Add New Flashcard</h3>
            <textarea id="newFlashcardQuestion" placeholder="Question"></textarea>
            <textarea id="newFlashcardAnswer" placeholder="Answer"></textarea>
            <div class="new-flashcard-modal-buttons">
                <button class="btn-cancel" id="cancelNewFlashcard">Cancel</button>
                <button class="btn-add" id="addNewFlashcard">Add Flashcard</button>
            </div>
        </div>
    </div>

    <!-- New Folder Modal -->
    <div class="new-item-modal-overlay" id="newFolderModal">
        <div class="new-item-modal-content">
            <h3 id="newFolderModalTitle">Add New Folder</h3>
            <input type="text" id="newFolderNameInput" placeholder="Folder Name"/>
            <select id="newFolderSubjectSelect">
                <option value="">Select Subject (Optional)</option>
                <option value="English">English</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="SAT">SAT</option>
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
            </select>
            <div class="new-item-modal-buttons">
                <button class="btn-cancel" id="cancelNewFolder">Cancel</button>
                <button class="btn-add" id="saveFolderButton">Save Folder</button>
            </div>
        </div>
    </div>

    <!-- New Set Modal -->
    <div class="new-item-modal-overlay" id="newSetModal">
        <div class="new-item-modal-content">
            <h3 id="newSetModalTitle">Add New Set</h3>
            <input type="text" id="newSetTitleInput" placeholder="Set Title"/>
            <div class="new-item-modal-buttons">
                <button class="btn-cancel" id="cancelNewSet">Cancel</button>
                <button class="btn-add" id="saveSetButton">Save Set</button>
            </div>
        </div>
    </div>

</div>

<!-- Firebase SDK (ESM version) -->
<script type="module">
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
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
    const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

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
                    'The dog was chased by the cat.',
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
                explanation: 'Leaves are the primary sites for photosynthesis, as they contain chloroplasts, which are the organelles where photosynthesis takes place.'
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
        if (!isAuthReady) {
            console.warn("Auth not ready, cannot load folders.");
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
            showDeleteFolderConfirm(folder.id);
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
                showMessageModal("Folder updated successfully!", null, null, false);
            } else {
                // Add new folder
                const foldersRef = collection(db, `artifacts/${appId}/users/${userId}/folders`);
                await addDoc(foldersRef, { name: folderName, subject: folderSubject, createdAt: new Date() });
                showMessageModal("Folder added successfully!", null, null, false);
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
    function showDeleteFolderConfirm(folderId) {
        showMessageModal("Are you sure you want to delete this folder? All sets and flashcards within it will also be deleted.", async () => {
            try {
                const folderRef = doc(db, `artifacts/${appId}/users/${userId}/folders`, folderId);
                // Delete all sets within this folder first
                const setsQuery = query(collection(db, `artifacts/${appId}/users/${userId}/flashcardSets`), where("folderId", "==", folderId));
                const setsSnapshot = await getDocs(setsQuery);
                const deleteSetPromises = setsSnapshot.docs.map(sDoc => deleteDoc(doc(db, `artifacts/${appId}/users/${userId}/flashcardSets`, sDoc.id)));
                await Promise.all(deleteSetPromises);

                await deleteDoc(folderRef);
                showMessageModal("Folder and its contents deleted successfully!", null, null, false);
            } catch (error) {
                console.error("Error deleting folder:", error);
                showMessageModal("Error deleting folder. Please try again.", null, null, false);
            }
        }, null, true);
    }

    function hideNewFolderModal() {
        newFolderModal.style.display = 'none';
    }

    /**
     * Loads and displays flashcard sets for a given folder from Firestore.
     * @param {string} folderId - The ID of the parent folder.
     */
    async function loadFlashcardSets(folderId) {
        if (!isAuthReady) {
            console.warn("Auth not ready, cannot load sets.");
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
            showDeleteSetConfirm(set.id);
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
                showMessageModal("Set updated successfully!", null, null, false);
            } else {
                // Add new set
                const setsRef = collection(db, `artifacts/${appId}/users/${userId}/flashcardSets`);
                await addDoc(setsRef, {
                    title: setTitle,
                    folderId: currentFolder.id,
                    flashcards: [], // Initialize with empty array
                    createdAt: new Date()
                });
                showMessageModal("Set added successfully!", null, null, false);
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
    function showDeleteSetConfirm(setId) {
        showMessageModal("Are you sure you want to delete this set? All flashcards within it will also be deleted.", async () => {
            try {
                const setRef = doc(db, `artifacts/${appId}/users/${userId}/flashcardSets`, setId);
                await deleteDoc(setRef);
                showMessageModal("Set deleted successfully!", null, null, false);
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
        }, null, true);
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
            showDeleteFlashcardConfirm(currentFlashcardIndex);
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
            showMessageModal("Flashcard added successfully!", null, null, false);
        } catch (error) {
            console.error("Error adding flashcard:", error);
            showMessageModal("Error adding flashcard. Please try again.", null, null, false);
        }
    }

    /**
     * Deletes a flashcard from the current set in Firestore.
     * @param {number} indexToDelete - The index of the flashcard to delete in the current set's array.
     */
    function showDeleteFlashcardConfirm(indexToDelete) {
        flashcardToDeleteId = indexToDelete; // Store index
        deleteFlashcardConfirmModal.style.display = 'flex';
    }

    async function deleteFlashcard() {
        if (currentSet && flashcardToDeleteId !== null) {
            try {
                const setRef = doc(db, `artifacts/${appId}/users/${userId}/flashcardSets`, currentSet.id);
                const updatedFlashcards = currentFlashcardsInSet.filter((_, i) => i !== flashcardToDeleteId);

                await updateDoc(setRef, { flashcards: updatedFlashcards });
                currentSet.flashcards = updatedFlashcards; // Update local state
                currentFlashcardsInSet = updatedFlashcards;

                if (currentFlashcardsInSet.length > 0) {
                    // Adjust index if the last card was deleted or if index is out of bounds
                    if (currentFlashcardIndex >= currentFlashcardsInSet.length) {
                        currentFlashcardIndex = currentFlashcardsInSet.length - 1;
                    }
                } else {
                    currentFlashcardIndex = -1; // No cards left
                }
                renderFlashcardsInSet();
                showMessageModal("Flashcard deleted successfully!", null, null, false);
            } catch (error) {
                console.error("Error deleting flashcard:", error);
                showMessageModal("Error deleting flashcard. Please try again.", null, null, false);
            } finally {
                flashcardToDeleteId = null;
                deleteFlashcardConfirmModal.style.display = 'none';
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
            app = initializeApp(firebaseConfig);
            db = getFirestore(app);
            auth = getAuth(app);

            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    userId = user.uid;
                    isAuthReady = true;
                    console.log("Firebase authenticated. User ID:", userId);
                    // Any data loading dependent on auth should happen here
                    // For flashcards, loadFolders() will be called when user clicks the button
                } else {
                    // Sign in anonymously if no user is logged in
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

            showMessageModal(confirmationMessage, () => {
                if (currentTestMode === 'test') {
                    generateSummary();
                } else {
                    populatePreSubmitReview();
                    showPage('preSubmitReviewContainer');
                }
            }, () => { /* Do nothing on cancel */ });
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
        deleteFlashcardConfirmYes.addEventListener('click', deleteFlashcard);
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
</script>
