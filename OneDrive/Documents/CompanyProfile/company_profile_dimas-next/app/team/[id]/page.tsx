export default async function TeamDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Deskripsi peran dengan gaya bahasa formal dan profesional
  const roleDescription = id === 'head-chef' 
    ? "Sebagai pemimpin tertinggi operasional dapur, Head Chef bertanggung jawab penuh atas kurasi menu, pengawasan standar kualitas, dan pemilihan bahan baku daging premium. Beliau mendedikasikan keahliannya untuk memastikan setiap potongan daging dipanggang dengan presisi tingkat tinggi dan konsistensi rasa yang memenuhi pedoman fine dining kelas atas."
    : id === 'sous-chef' 
    ? "Bertindak sebagai pilar utama dalam eksekusi dapur, Sous Chef mengawasi kelancaran operasional harian dan ketepatan waktu penyajian. Dengan ketelitian dan kedisiplinan yang ekstensif, beliau memimpin tahapan preparasi, menjaga harmoni kerja tim, serta memastikan standar sanitasi dan kualitas visual hidangan tersaji secara sempurna."
    : "Pemimpin strategis yang bertanggung jawab atas keseluruhan pengalaman tamu. General Manager mengelola operasional, memastikan pelaksanaan standar keramahtamahan yang elegan, serta menciptakan atmosfer ruang makan yang berkelas. Beliau merupakan jembatan utama antara visi kualitas dapur dan kepuasan paripurna setiap pelanggan.";

  return (
    <div className="container py-5 mt-5 text-center">
      <h2 className="fw-bold text-capitalize">{id.replace('-', ' ')}</h2>
      <div className="card border-0 shadow mt-4 p-5 mx-auto" style={{ maxWidth: '800px' }}>
        <h4 className="mb-4 fw-bold">Tanggung Jawab Profesional:</h4>
        <p className="lead text-muted text-start" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
          {roleDescription}
        </p>
        <div className="mt-5">
          <a href="/team" className="btn btn-dark rounded-pill px-4 py-2">Kembali ke Daftar Tim</a>
        </div>
      </div>
    </div>
  );
}