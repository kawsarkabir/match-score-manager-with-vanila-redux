# Match Score Manager

## Description

This project manages scores for multiple matches using HTML, vanilla JavaScript, and the Redux CDN version. You can add, increment, decrement, and reset scores for each match individually.

## Features

- Add new matches with an initial score of 0.
- Each match has its own state management.
- Increment and Decrement scores using input fields and pressing the Enter key.
- Scores cannot go below zero.
- Reset scores of all matches to zero while retaining the number of matches.

## Instructions

1. **Adding a New Match:**

   - Click the "Add Another Match" button to add a new match.
   - Each new match starts with an initial score of 0.

2. **Increment/Decrement Scores:**

   - Enter a value in the Increment or Decrement input field.
   - Press the Enter key to apply the increment or decrement to the match score.
   - The total score will not go below zero.

3. **Reset Scores:**
   - Click the "Reset" button to reset all match scores to zero.
   - The number of matches will remain the same.

## Usage

1. Clone the repository.
2. Open `index.html` in your browser to run the project.
3. Ensure you have an internet connection to load the Redux CDN.

## Dependencies

- Redux (loaded via CDN)

## Contribution

Feel free to fork this repository and submit pull requests.

## License

This project is licensed under the MIT License.

## Example HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Match Score Manager</title>
  </head>
  <body>
    <!-- Add your HTML structure here -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.1.1/redux.min.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```
