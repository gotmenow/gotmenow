export default function DisclaimerBox({ children, title = "Important" }) {
  return (
    <div className="bg-[#0A2540] text-[#F8FAFC] p-6 sm:p-8 rounded-sm border-l-4 border-[#3d97e8]">
      <div className="text-xs font-semibold tracking-widest uppercase text-[#3d97e8] mb-3">{title}</div>
      <p className="text-sm sm:text-[15px] font-medium leading-relaxed text-[#F8FAFC]/85">{children}</p>
    </div>
  );
}