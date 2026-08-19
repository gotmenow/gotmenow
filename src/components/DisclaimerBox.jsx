export default function DisclaimerBox({ children, title = "Important" }) {
  return (
    <div className="bg-[#000000] text-[#F8FAFC] p-6 sm:p-8 rounded-sm border-l-4 border-[#00a99d]">
      <div className="text-xs font-semibold tracking-widest uppercase text-[#00a99d] mb-3">{title}</div>
      <p className="text-sm sm:text-[15px] font-medium leading-relaxed text-[#F8FAFC]/85">{children}</p>
    </div>
  );
}