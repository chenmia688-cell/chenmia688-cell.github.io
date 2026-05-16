import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">{site.brand} · 个人作品集</div>
      <div className="footer__meta">
        {site.footer.coords ? `${site.footer.line} · ${site.footer.coords}` : site.footer.line}
      </div>
      <div className="footer__links">
        <a href="#home">首页</a>
        <a href="#work">项目作品</a>
        <a href="#contact">联系我</a>
        <a href="#home">回到顶部</a>
      </div>
    </footer>
  )
}
