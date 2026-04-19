import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  photoAlt: string;
}

export function TeamMember({ name, role, bio, photoUrl, photoAlt }: TeamMemberProps) {
  return (
    <div className="card text-center">
      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-1 ring-colhybri-teal/20">
        <Image
          src={photoUrl}
          alt={photoAlt}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <h3 className="font-display text-xl font-semibold">{name}</h3>
      <p className="font-sans text-sm text-colhybri-teal mb-3">{role}</p>
      <p className="font-sans text-sm text-colhybri-dark/70 leading-relaxed">{bio}</p>
    </div>
  );
}
