import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">{site.brand} · Personal Portfolio</div>
      <div className="footer__meta">
        {site.footer.line} · {site.footer.coords}
      </div>
      <div className="footer__links">
        <a href="#home">Home</a>
        <a href="#system">System</a>
        <a href="#contact">Contact</a>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}
