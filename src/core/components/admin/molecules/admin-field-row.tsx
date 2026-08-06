type AdminFieldRowProps = {
  children: React.ReactNode;
};

export default function AdminFieldRow({
  children,
}: AdminFieldRowProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {children}
    </div>
  );
}