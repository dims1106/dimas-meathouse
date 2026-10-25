import Link from 'next/link';

const teamMembers = [
  { id: 'head-chef', name: 'Chef Bryan', role: 'Head Chef / Jagonya Steak' },
  { id: 'sous-chef', name: 'Chef Salim', role: 'Sous Chef / Pengiris handal' },
  { id: 'manager', name: 'Dimas', role: 'General Manager / Ahlinya ahli' }
];

export default function Team() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="fw-bold text-center mb-5">Tim Dims Meathouse</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {teamMembers.map((member) => (
          <div className="col" key={member.id}>
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <h5 className="fw-bold">{member.name}</h5>
              <p className="text-muted">{member.role}</p>
              {/* Tombol Interaksi menggunakan Link */}
              <Link href={`/team/${member.id}`} className="btn btn-outline-dark mt-auto rounded-pill">
                Lihat Profil
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}