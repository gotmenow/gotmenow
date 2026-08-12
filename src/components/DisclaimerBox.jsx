export default function DisclaimerBox({ children, title = "Important" }) {
  return (
    <div className="bg-[#0F172A] text-[#F8FAFC] p-6 sm:p-8 rounded-sm border-l-4 border-[#C2410C]">
      <div className="text-xs font-semibold tracking-widest uppercase text-[#C2410C] mb-3">{title}</div>
      <p className="text-sm sm:text-[15px] font-medium leading-relaxed text-[#F8FAFC]/85">{children}</p>
    </div>
  );
}