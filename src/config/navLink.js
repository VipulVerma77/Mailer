// src/config/navLinks.js
export const navLinks = [
  {
    label: "Home",
    path: "/",
    type: "link"
  },
  {
    label: "About",
    path: "/about",
    type: "link"
  },
  {
    label: "Payment Orchestration",
    path: "/payment",
    type: "link"
  },
  {
    label: "Services",
    path: "/services",
    items:[
        { label: "Pay In", path: "/payin" },
        { label: "Pay Out", path: "/payout" },
    ],
    type: "dropdown"
  },
  {
    label: "Contact Us",
    path: "/contact",
    type: "link"
  }
];

export const authLinks = [
  {
    label: "Register",
    path: "/register",
    variant: "primary"
  }
];

export  const circles = [
          { 
          id: 1, 
          size: 'w-[80px] h-[80px]', 
          style: 'border-[12px] border-pink-400 opacity-20', 
          animation: 'float-random-1',
          position: 'left-[15%] top-[20%]'
        },
        { 
          id: 2, 
          size: 'w-[200px] h-[200px]', 
          style: 'border-[15px] border-purple-400 opacity-20', 
          animation: 'float-random-2',
          position: 'right-[10%] top-[30%]'
        },
        { 
          id: 3, 
          size: 'w-[120px] h-[120px]', 
          style: 'border-[10px] border-blue-400 opacity-20', 
          animation: 'float-random-3',
          position: 'left-[20%] bottom-[25%]'
        },
        { 
          id: 4, 
          size: 'w-[90px] h-[90px]', 
          style: 'border-[14px] border-indigo-400 opacity-20', 
          animation: 'float-random-4',
          position: 'right-[25%] bottom-[15%]'
        },
        { 
          id: 5, 
          size: 'w-[120px] h-[120px]', 
          style: 'border-[28px] border-emerald-400 opacity-20', 
          animation: 'float-random-5',
          position: 'left-[50%] top-[50%]'
        },
        { 
          id: 6, 
          size: 'w-[60px] h-[60px]', 
          style: 'border-[8px] border-amber-400 opacity-20', 
          animation: 'float-random-6',
          position: 'right-[15%] bottom-[30%]'
        },
      ];