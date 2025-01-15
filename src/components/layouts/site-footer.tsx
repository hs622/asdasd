import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-12 m-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="font-bold mb-4">Health Desk</h3>
            <p className="text-sm text-muted-foreground">
              Improving human health through the combination of cutting-edge technologies and top medical expertise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Join as Doctor</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">AI Health Assistant</Link></li>
              <li><Link href="#">AI Doctor</Link></li>
              <li><Link href="#">Symptom Checker</Link></li>
              <li><Link href="#">Second Opinion</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Knowledge Base</Link></li>
              <li><Link href="#">Use Cases</Link></li>
              <li><Link href="#">Help Center</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

