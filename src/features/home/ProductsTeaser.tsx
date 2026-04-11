import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/data/products'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ShoppingCart, ArrowRight } from 'lucide-react'

export function ProductsTeaser() {
  return (
    <section className="section-pad bg-brand-50/20">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Danh Mục Sản Phẩm</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">Khám Phá KOTHECHE</h2>
            <p className="text-gray-600 text-lg">
              Snack trái cây sấy thăng hoa 100% tự nhiên. Sẵn sàng cho phân phối toàn cầu hoặc gia công nhãn riêng OEM.
            </p>
          </div>
          <Button href="/products" variant="outline" className="hidden md:inline-flex">
            Xem Toàn Bộ Danh Mục
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div key={product.slug} className="relative isolate bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col">

              {/* Image box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-50 block">
                {/* Link directly wraps the Image to guarantee identical hit area */}
                <Link href={`/products/${product.slug}`} className="block w-full h-full relative z-10" aria-label={`Xem ${product.name}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>

                {product.badge && (
                  <div className="absolute top-4 left-4 z-20 pointer-events-none">
                    <Badge variant={product.slug === 'dragon-fruit' ? 'brand' : 'orange'} className="shadow-md">
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* Overlay pointer-events-none check to allow clickthrough to Image link, but keep button clickable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none z-20">
                  {product.amazonUrl && (
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer" className="relative z-30 pointer-events-auto bg-[#FF9900] text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#FFB84D] transition-colors w-full justify-center">
                      <ShoppingCart size={16} /> Mua trên Amazon
                    </a>
                  )}
                </div>
              </div>

              {/* Content box */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-brand-800 transition-colors">
                  <Link href={`/products/${product.slug}`} className="hover:underline">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm font-medium text-brand-600 mb-4">{product.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.slice(0, 2).map((feat, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {feat}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-sm text-gray-500">{product.weight}</span>
                  <Link href={`/products/${product.slug}`} className="text-brand-800 flex items-center gap-1 text-sm font-bold hover:text-brand-600 transition-colors">
                    Chi tiết <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button href="/products" variant="outline" className="w-full">
            Xem Toàn Bộ Danh Mục
          </Button>
        </div>
      </div>
    </section>
  )
}
