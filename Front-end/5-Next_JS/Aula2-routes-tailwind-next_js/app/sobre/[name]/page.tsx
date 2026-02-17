type PageProps = {
  params: Promise<{ name: string }>;
};

export default async function Page({ params }: PageProps) {
  const { name } = await params;

  return <h1>Meu nome é {name}</h1>;
}
