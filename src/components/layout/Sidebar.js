import { NavLink} from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [search, setSearch] = useState("");
  

  const [openSections, setOpenSections] = useState({
    General: false,
    Sorting: false,
    Searching: false,
    "Dynamic Programming": false,
    Graph: false,
    Practice: false,
  });

  const toggleSection = (title) => {
    setOpenSections({
      ...openSections,
      [title]: !openSections[title],
    });
  };

  const data = [
    {
      title: "General",
      links: [{ name: "Home", path: "/" }],
    },
    {
      title: "Sorting",
      links: [
        { name: "Bubble Sort", path: "/sorting/bubble" },
        { name: "Selection Sort", path: "/sorting/selection" },
        { name: "Insertion Sort", path: "/sorting/insertion" },
        { name: "Merge Sort", path: "/sorting/merge" },
        { name: "Quick Sort", path: "/sorting/quick" },
      ],
    },
    {
      title: "Searching",
      links: [
        { name: "Linear Search", path: "/searching/linear" },
        { name: "Binary Search", path: "/searching/binary" },
      ],
    },
    {
      title: "Dynamic Programming",
      links: [
        { name: "LCS", path: "/dp/lcs" },
        { name: "Knapsack", path: "/dp/knapsack" },
      ],
    },
    {
      title: "Graph",
      links: [
        { name: "BFS", path: "/graph/bfs" },
        { name: "DFS", path: "/graph/dfs" },
      ],
    },
    {
  title: "Tree",
  links: [  
    { name: "BST (Insertion)", path: "/tree/bst" }
  ]
},
    {
      title: "Practice",
      links: [{ name: "Quiz", path: "/quiz" }],
    },
  ];

  return (
    <div className="sidebar">
      

      <input
        className="search-box"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {data.map((section, i) => {
        const filteredLinks = section.links.filter((link) =>
          link.name.toLowerCase().includes(search.toLowerCase())
        );

        if (filteredLinks.length === 0) return null;

        return (
          <div key={i}>
            <h3
              onClick={() => toggleSection(section.title)}
              className="section-title"
            >
              <span className={`arrow ${openSections[section.title] ? "open" : ""}`}>
                ▶
              </span>
              {section.title}
            </h3>

            {openSections[section.title] &&
              filteredLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "active-link" : ""
                  }
                >
                  {link.name}
                </NavLink>
              ))}
          </div>
        );
      })}
    </div>
  );
}