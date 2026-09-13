My project name is Dev Stack.

Dev Stack is a technology discovery platform where users can explore technologies and build their own personalized development stack.

Technologies used React, TypeScript, Tailwind CSS, DaisyUI, React Icons
Features are-
1.Explore technologies with category, rating, difficulty, and description.
2.Add and remove technologies from your stack.
3.Selected technologies are highlighted and their buttons are disabled until removed.

1.What is JSX, and why is it used in React?
Answer: JSX stands for JavaScript XML. It is a syntax that allows us to write HTML-like code inside JavaScript. React uses JSX because it makes creating and understanding the user interface easier.

2.What is the difference between props and state?
Answer: Props are used to pass data from a parent component to a child component. Props are read-only. State is data managed inside a component that can change over time. When state changes, React updates the UI.

3.What does the useState hook do, and where did you use it in this project?
Answer: useState is a React Hook used to create and manage state in a functional component. In my project, I used useState in the Technologies component to manage the selected technologies. I also used it to store the promise for fetching the technology data.

4.What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: useEffect is a React Hook used to perform side effects. In my project, I used useEffect in the TechnologyCard component to check whether a technology is currently in the selected stack and update its selected state when the stack changes.

5.Why does every item in a .map() list need a unique key prop?
Answer: Each item in a .map() list needs a unique key so React can identify each item and efficiently update the UI when items are added, removed, or changed.

6.What is conditional rendering? Show one place you used it.
Answer: Conditional rendering means displaying different UI based on a condition. In my project, I used it in SelectedTechnologies to show 'Your stack is empty' when no technology is selected, and to display the selected technologies when the stack contains items.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer: A parent component passes data to a child component through props. In my project, Technologies passes selectedTechnologies and setSelectedTechnologies to components like TechnologyCard and SelectedTechnologies. The child components can then use the setter function to update the parent's state.