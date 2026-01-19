# OOPs Review App

A beautiful, responsive web application for reviewing Object-Oriented Programming concepts. Features both reading/review mode and an interactive quiz game mode.

## Features

- 📖 **Reading Mode**: Browse through OOPs topics with easy navigation
- 🎮 **Quiz Mode**: Test your knowledge with interactive quizzes
- 📱 **Responsive Design**: Works seamlessly on both mobile and desktop devices
- 🎨 **Beautiful UI**: Purple color scheme with complementary colors
- ⚙️ **Customizable**: Easy to add your own content from your Word file

## How to Use

1. **For Local Testing**: Simply open `index.html` in your web browser
2. **For GitHub Pages**: 
   - Push this folder to your GitHub repository
   - Enable GitHub Pages in repository settings
   - Select the branch and folder containing `index.html`

## Adding Content from Your Word File

To add content from your Word file, edit the `data.js` file:

### Adding Topics (Reading Mode)

In the `topics` array, add objects like this:

```javascript
{
    title: "Your Topic Title",
    content: [
        "First paragraph of content",
        "Second paragraph",
        {
            type: "list",
            ordered: false, // true for numbered list
            items: [
                "Item 1",
                "Item 2",
                "Item 3"
            ]
        },
        {
            type: "code",
            code: "your code here"
        }
    ]
}
```

### Adding Quiz Questions

In the `questions` array, add objects like this:

```javascript
{
    question: "Your question here?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    correctAnswer: 0, // Index of correct answer (0-3)
    explanation: "Explanation of the answer"
}
```

## File Structure

```
oops-review-app/
├── index.html      # Main HTML file
├── styles.css      # Styling and responsive design
├── app.js          # Application logic
├── data.js         # Content data (topics and questions)
└── README.md       # This file
```

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors

You can customize colors in `styles.css` by modifying the CSS variables in the `:root` selector:

```css
:root {
    --primary-purple: #7B2CBF;
    --dark-purple: #5A189A;
    --light-purple: #9D4EDD;
    /* ... more colors ... */
}
```

## License

Feel free to use and modify this app for your learning purposes!
