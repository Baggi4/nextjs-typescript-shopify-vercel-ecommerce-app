
import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from "@framework/product"
import { getConfig } from "@framework/api/config"
import { Layout } from "components/common"
import { ProductCard } from "components/product"
import { Grid, Hero, Marquee } from "components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Hero
       headline="Buy your Social Media Audience"
       description="Let's Start with 10k,50k, 100k+ Followers accounts..."
      />
      <Grid layout="B">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
      )}
      </Grid>
      <Marquee variant="secondary">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
