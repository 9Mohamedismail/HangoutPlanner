type CardShellProps = {
  children: React.ReactNode;
  className?: string;
};

function CardShell({ children, className = "" }: CardShellProps) {
  return (
    <div
      className={`border-secondary border rounded-[45px] bg-primary p-6.25 sm:p-12.5 text-secondary shadow-[0_6px_0_0_#191A23] ${className}`}
    >
      {children}
    </div>
  );
}

export default CardShell;
