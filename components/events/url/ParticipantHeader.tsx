

export default function ParticipantHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center gap-4">
      {children}
    </div>
  );
}
