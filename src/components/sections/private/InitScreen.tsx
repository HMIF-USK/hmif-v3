import { ReactNode } from 'react';

type InitScreenProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export default function InitScreen({ title, description, children }: InitScreenProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-6 py-20 text-center text-white">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/90 p-10 shadow-xl shadow-slate-950/25 backdrop-blur-lg">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
