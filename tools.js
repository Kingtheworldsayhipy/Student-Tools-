/* ==================================================================
   STUDENT TOOLS - TOOL REGISTRY (danh sách công cụ)
   ------------------------------------------------------------------
   File index.html đọc danh sách này để tự dựng dashboard.
   Khi thêm công cụ mới, bạn chỉ cần:
     1) Tạo file công cụ trong thư mục /tools (ví dụ tools/gpa.html)
     2) Thêm một khối { ... } vào danh sách bên dưới
   Không cần sửa index.html.

   Các trường:
     id          : tên ngắn, không trùng nhau
     name        : tên hiển thị
     category    : electrical | digital | academic | engineering
     status      : "available" (dùng được) hoặc "soon" (sắp ra mắt)
     href        : đường dẫn tới file công cụ (chỉ cần khi status = "available")
     description : mô tả ngắn trên thẻ
     keywords    : từ khóa để thanh tìm kiếm tìm ra công cụ
     featured    : (tùy chọn) nếu có, công cụ được nêu bật ở đầu trang
   ================================================================== */
window.STUDENT_TOOLS = [
  {
    id: "ohm-law",
    name: "Ohm's Law Calculator",
    category: "electrical",
    status: "available",
    href: "tools/ohm-law.html",
    description: "Find voltage, current, resistance, and power from two known values.",
    keywords: "voltage current resistance power ohm circuit formula unit",
    featured: {
      headline: "Make electrical calculations simpler.",
      text: "Find voltage, current, resistance, and power from just two known values.",
      symbol: "Ω"
    }
  },
  {
    id: "number-system",
    name: "Number System Converter",
    category: "digital",
    status: "available",
    href: "tools/number-system-converter.html",
    description: "Convert between binary, octal, decimal, hexadecimal and any base from 2 to 36.",
    keywords: "binary decimal hexadecimal hex octal base convert converter number system twos complement bits radix"
  },
  {
    id: "gpa",
    name: "GPA Calculator",
    category: "academic",
    status: "available",
    href: "tools/gpa-calculator.html",
    description: "Calculate your semester and cumulative GPA.",
    keywords: "gpa cgpa grade grades score percentage letter credits study university college semester"
  },
  {
    id: "truth-table",
    name: "Truth Table Generator",
    category: "digital",
    status: "available",
    href: "tools/truth-table.html",
    description: "Generate truth tables for Boolean expressions, with minterms, SOP/POS and an equivalence check.",
    keywords: "boolean logic truth table and or not xor nand nor xnor minterm maxterm sop pos gate expression equivalence tautology digital"
  },
  {
    id: "unit-converter",
    name: "Engineering Unit Converter",
    category: "engineering",
    status: "soon",
    description: "Convert common engineering and measurement units.",
    keywords: "unit conversion measurement convert"
  },
  {
    id: "power-calculator",
    name: "Power Calculator",
    category: "electrical",
    status: "available",
    href: "tools/power-calculator.html",
    description: "Calculate DC and AC power, power factor, energy use, and electricity cost.",
    keywords: "power watt energy electrical kwh cost bill electricity price power factor ac dc three-phase apparent reactive"
  }
];
