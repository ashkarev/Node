const http = require("http");

const user = require("./task.json");

const todo = [
  {
    id: "1",
    title: "Buy groceries",
    completed: false,
    dueDate: "2025-12-01",
  },
  {
    id: "2",
    title: "Finish report",
    completed: true,
    dueDate: "2025-11-25",
  },
  {
    id: "3",
    title: "Call mom",
    completed: false,
    dueDate: "2025-11-28",
  },
];

const course = {
  courseId: "CS101",
  title: "Introduction to Computer Science",
  instructor: {
    firstName: "Alice",
    lastName: "Smith",
    email: "alice.smith@example.com",
  },
  description:
    "This course provides a foundational understanding of computer science principles, including programming concepts, data structures, and algorithms.",
  durationWeeks: 12,
  difficulty: "Beginner",
  modules: [
    {
      moduleId: "MOD001",
      title: "Programming Fundamentals",
      lessons: [
        { lessonId: "LES001", title: "Variables and Data Types" },
        { lessonId: "LES002", title: "Control Flow Statements" },
      ],
    },
    {
      moduleId: "MOD002",
      title: "Data Structures",
      lessons: [
        { lessonId: "LES003", title: "Arrays and Linked Lists" },
        { lessonId: "LES004", title: "Trees and Graphs" },
      ],
    },
    {
      moduleId: "MOD003",
      title: "Algorithms",
      lessons: [
        { lessonId: "LES005", title: "Sorting Algorithms" },
        { lessonId: "LES006", title: "Searching Algorithms" },
      ],
    },
  ],
  prerequisites: ["Basic math skills"],
  tags: ["computer science", "programming", "education", "online course"],
};

const server = http.createServer((req, res) => {
  if (req.url == "/getRecipe"   ) {
    let obj = {
      recipes: [
        {
          id: 1,
          name: "Classic Margherita Pizza",
          ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt and pepper to taste",
          ],
          instructions: [
            "Preheat the oven to 475°F (245°C).",
            "Roll out the pizza dough and spread tomato sauce evenly.",
            "Top with slices of fresh mozzarella and fresh basil leaves.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "Slice and serve hot.",
          ],
          prepTimeMinutes: 20,
          cookTimeMinutes: 15,
          servings: 4,
          difficulty: "Easy",
          cuisine: "Italian",
          caloriesPerServing: 300,
          tags: ["Pizza", "Italian"],
          userId: 45,
          image: "https://cdn.dummyjson.com/recipe-images/1.webp",
          rating: 4.6,
          reviewCount: 3,
          mealType: ["Dinner"],
        },
      ],
    };
    jsondata = JSON.stringify(obj);
    res.end(jsondata);
  } else if (req.url == "/getTodo") {
    let jsondata = JSON.stringify(todo);
    res.end(jsondata);
  } else if (req.url == "/getUser") {
    let jsonData = JSON.stringify(user);
    res.end(jsonData);
  } else if (req.url == "/getCourse") {
    let json = JSON.stringify(course);
    res.end(json);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(port);
});

// . getTodos
//        3. getUsers
//        4. getCourses
