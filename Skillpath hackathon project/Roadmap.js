const roadmapData = {
  "React Developer": [
    {
      step: "Learn HTML, CSS, JavaScript basics",
      resources: [
        { name: "FreeCodeCamp Full Course", link: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
        { name: "MDN Docs", link: "https://developer.mozilla.org/en-US/docs/Web" }
      ]
    },
    {
      step: "Understand DOM and ES6 features",
      resources: [
        { name: "DOM Crash Course", link: "https://www.youtube.com/watch?v=0ik6X4DJKCc" },
        { name: "ES6 Guide", link: "https://www.javascripttutorial.net/es6/" }
      ]
    },
    {
      step: "Learn React fundamentals (JSX, Components, Props)",
      resources: [
        { name: "React Crash Course", link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
        { name: "React Docs", link: "https://reactjs.org/docs/getting-started.html" }
      ]
    },
    {
      step: "Understand Hooks, useState, useEffect",
      resources: [
        { name: "Hooks Tutorial", link: "https://www.youtube.com/watch?v=-MlNBTSg_Ww" }
      ]
    },
    {
      step: "State Management (Redux, Context)",
      resources: [
        { name: "Redux in 100 Seconds", link: "https://www.youtube.com/watch?v=poQXNp9ItL4" }
      ]
    },
    {
      step: "Build real-world React projects",
      resources: [
        { name: "Project Ideas", link: "https://github.com/topics/react-project" }
      ]
    },
    {
      step: "Deploy apps (Vercel, Netlify)",
      resources: [
        { name: "Deploy React App", link: "https://www.youtube.com/watch?v=YpTmcCBBdTE" }
      ]
    }
  ],

  "Data Scientist": [
    {
      step: "Learn Python and Jupyter Notebook",
      resources: [
        { name: "Python for Beginners", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        { name: "Jupyter Intro", link: "https://realpython.com/jupyter-notebook-introduction/" }
      ]
    },
    {
      step: "Understand Pandas and Numpy",
      resources: [
        { name: "Pandas Tutorial", link: "https://www.youtube.com/watch?v=vmEHCJofslg" },
        { name: "NumPy Crash Course", link: "https://www.youtube.com/watch?v=QUT1VHiLmmI" }
      ]
    },
    {
      step: "Data Visualization (Matplotlib, Seaborn)",
      resources: [
        { name: "Data Viz Tutorial", link: "https://www.youtube.com/watch?v=6GUZXDef2U0" }
      ]
    },
    {
      step: "Learn Statistics and Probability",
      resources: [
        { name: "Khan Academy Stats", link: "https://www.khanacademy.org/math/statistics-probability" }
      ]
    },
    {
      step: "Machine Learning with Scikit-learn",
      resources: [
        { name: "ML with Scikit-learn", link: "https://www.youtube.com/watch?v=0Lt9w-BxKFQ" }
      ]
    },
    {
      step: "Deep Learning Basics",
      resources: [
        { name: "Intro to Deep Learning", link: "https://www.youtube.com/watch?v=aircAruvnKk" }
      ]
    },
    {
      step: "Build ML Projects",
      resources: [
        { name: "Kaggle Competitions", link: "https://www.kaggle.com/competitions" }
      ]
    }
  ]
};

// Get goal from localStorage
const goal = localStorage.getItem("selectedGoal");

// DOM elements
const roadmapList = document.getElementById("roadmap-steps");
const title = document.getElementById("roadmap-title");

// Generate content
if (goal && roadmapData[goal]) {
  title.innerText = `Roadmap for ${goal}`;
  roadmapData[goal].forEach((item, index) => {
    const stepCard = document.createElement("div");
    stepCard.className = "step-card";

    const stepHeader = document.createElement("div");
    stepHeader.className = "step-header";
    stepHeader.innerText = `${index + 1}. ${item.step}`;

    const stepContent = document.createElement("div");
    stepContent.className = "step-content";

    if (item.resources && item.resources.length > 0) {
      const resList = document.createElement("ul");
      item.resources.forEach((res) => {
        const resItem = document.createElement("li");
        const resLink = document.createElement("a");
        resLink.href = res.link;
        resLink.innerText = res.name;
        resLink.target = "_blank";
        resItem.appendChild(resLink);
        resList.appendChild(resItem);
      });
      stepContent.appendChild(resList);
    }

    // Toggle logic
    stepHeader.addEventListener("click", () => {
      stepContent.classList.toggle("active");
      stepCard.classList.toggle("expanded");
    });

    stepCard.appendChild(stepHeader);
    stepCard.appendChild(stepContent);
    roadmapList.appendChild(stepCard);
  });
} else {
  title.innerText = "No roadmap found for your input.";
}
