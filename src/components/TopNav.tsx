import { UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <header className="navbar shadow-lg bg-neutral text-neutral-content mb-4">
      <div className="flex px-2 w-full justify-between">
        <span className="text-lg font-bold uppercase">
          <a href="/">GPT Forms</a>
        </span>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
