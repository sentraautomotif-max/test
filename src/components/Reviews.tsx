const reviews = [
  {
    id: 1,
    name: "Ahmad Rizki",
    car: "BMW 320i",
    rating: 5,
    text: "Kerjanya rapi dan profesional. Kaca depan BMW saya dipasang dengan standar tinggi. Tidak ada kebocoran sama sekali.",
    date: "2 minggu lalu",
  },
  {
    id: 2,
    name: "Dewi Sartika",
    car: "Toyota Alphard",
    rating: 5,
    text: "Home service ke rumah, teknisinya ramah dan teliti. Hasil pemasangan sangat memuaskan. Recommended!",
    date: "1 bulan lalu",
  },
  {
    id: 3,
    name: "Budi Santoso",
    car: "Mercedes C200",
    rating: 5,
    text: "Sudah 2 kali pakai jasa Sentra. Konsisten hasilnya, garansi juga jelas. Mantap!",
    date: "3 minggu lalu",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-muted"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-background py-20" id="reviews">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Customer Reviews
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What Our Customers Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating rating={5} />
            <span className="text-sm text-muted-foreground">
              4.9 rating on Google Reviews
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-border bg-background p-6"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.car}</p>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/place/Sentra+Autoglass"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all reviews on Google
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
