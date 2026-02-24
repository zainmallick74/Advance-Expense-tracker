function CategorySummary({ expenses = [] }) {

  // 🔹 1. Total Spent
  const totalSpent = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  // 🔹 2. Group by Category
  const categoryTotal = expenses.reduce((acc, item) => {
    const category = item.category || "Uncategorized";

    if (acc[category]) {
      acc[category] += Number(item.amount);
    } else {
      acc[category] = Number(item.amount);
    }

    return acc;
  }, {});

  // 🔹 3. Find Top Category
  const topCategory =
    Object.entries(categoryTotal).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";

  // 🔹 4. Color Map
  const colors = {
    Food: "bg-green-500",
    Travel: "bg-purple-500",
    Bills: "bg-yellow-500",
    Shopping: "bg-blue-500",
    Uncategorized: "bg-gray-500",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      {/* 🔹 Dashboard Title */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Dashboard Overview
      </h1>

      {/* 🔹 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 px-4">
        
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-gray-500">Total Spent</p>
          <p className="text-xl font-semibold mt-2">
            ₹ {totalSpent.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-gray-500">Transactions</p>
          <p className="text-xl font-semibold mt-2">
            {expenses.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-gray-500">Top Category</p>
          <p className="text-xl font-semibold mt-2">
            {topCategory}
          </p>
        </div>
      </div>

      {/* 🔹 Category Breakdown Card */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl mx-auto">
        
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-6">
          📊 Category Breakdown
        </h2>

        {Object.keys(categoryTotal).length === 0 ? (
          <p className="text-gray-400 text-center">
            No expenses added yet.
          </p>
        ) : (
          Object.entries(categoryTotal).map(([category, total]) => {

            const percentage =
              totalSpent === 0
                ? 0
                : ((total / totalSpent) * 100).toFixed(1);

            const isTop = category === topCategory;

            return (
              <div
                key={category}
                className={`mb-6 ${isTop ? "bg-blue-50 p-4 rounded-lg" : ""}`}
              >
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>{category}</span>
                  <span>
                    ₹ {total.toLocaleString()} ({percentage}%)
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className={`${colors[category] || "bg-gray-500"} h-3 rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}

export default CategorySummary;