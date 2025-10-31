export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">© {currentYear} Aakash Hariram. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/Rucarido"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:aakashhariram22@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
