import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ShopHub</h3>
            <p className="text-gray-400">
              为您提供最优质的产品和服务。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">首页</Link></li>
              <li><Link href="/products" className="hover:text-white transition">产品</Link></li>
              <li><Link href="/about" className="hover:text-white transition">关于我们</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">博客</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-4">客户服务</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-white transition">联系我们</Link></li>
              <li><a href="#" className="hover:text-white transition">常见问题</a></li>
              <li><a href="#" className="hover:text-white transition">退货政策</a></li>
              <li><a href="#" className="hover:text-white transition">隐私政策</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="text-2xl">f</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="text-2xl">𝕏</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="text-2xl">📷</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ShopHub. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}
