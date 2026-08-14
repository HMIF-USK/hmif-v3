import LoginContent from '../components/login.content';
import LoginForm from '../components/login.form';

export default function LoginContainer() {
  return (
    <main className="grid-backdrop relative min-h-screen overflow-hidden bg-background">
      <div className="relative grid min-h-screen lg:grid-cols-2">
        <LoginContent />
        <div className="flex items-center justify-center p-6 sm:p-10">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
