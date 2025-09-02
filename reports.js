// ---------- Tab Switching ----------
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ---------- Charts with Dummy Data ----------

// Monthly Stats
new Chart(document.getElementById("monthlyChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [{
      label: "Incidents",
      data: [120, 95, 130, 160, 180, 140, 170, 200],
      backgroundColor: "#0008a9ff"
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "#fff" } } },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } }
    }
  }
});

// Yearly Stats
new Chart(document.getElementById("yearlyChart"), {
  type: "line",
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [{
      label: "Cases Solved",
      data: [1200, 1500, 1700, 1900, 2100],
      borderColor: "#fbbf24",
      backgroundColor: "rgba(251,191,36,0.3)",
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "#fff" } } },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } }
    }
  }
});

// Revenue Chart
new Chart(document.getElementById("revenueChart"), {
  type: "doughnut",
  data: {
    labels: ["Fines", "Tolls", "Services", "Other"],
    datasets: [{
      data: [50000, 30000, 20000, 10000],
      backgroundColor: ["#c084fc", "#f59e0b", "#10b981", "#ef4444"]
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "#fff" } } }
  }
});

// Officer Performance
new Chart(document.getElementById("performanceChart"), {
  type: "radar",
  data: {
    labels: ["Punctuality", "Efficiency", "Accuracy", "Teamwork", "Reports"],
    datasets: [
      {
        label: "Officer A",
        data: [85, 90, 80, 70, 95],
        borderColor: "#a855f7",
        backgroundColor: "rgba(168,85,247,0.3)"
      },
      {
        label: "Officer B",
        data: [75, 85, 88, 80, 90],
        borderColor: "#f97316",
        backgroundColor: "rgba(249,115,22,0.3)"
      }
    ]
  },
  options: {
    plugins: { legend: { labels: { color: "#fff" } } },
    scales: {
      r: {
        angleLines: { color: "#ccc" },
        grid: { color: "rgba(255,255,255,0.2)" },
        pointLabels: { color: "#fff" },
        ticks: { color: "#fff" }
      }
    }
  }
});
