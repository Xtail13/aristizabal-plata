import Image from "next/image";
import type { ReactNode } from "react";
import { Grain } from "./Grain";

interface EditorialFrameProps {
  /** Foto final cuando exista. Si falta, se renderiza la composición editorial. */
  src?: string;
  alt?: string;
  /** Relación de aspecto Tailwind (p. ej. "aspect-[4/3]"). */
  ratio?: string;
  /** Dato/índice destacado en serif para la composición sin foto. */
  accent?: ReactNode;
  /** Etiqueta breve inferior (meta) para la composición sin foto. */
  caption?: ReactNode;
  className?: string;
}

/**
 * Marco visual con tratamiento duotono navy.
 * Con `src`: muestra la fotografía final tratada.
 * Sin `src`: composición arquitectónica intencional (no placeholder),
 * lista para sustituir por foto real sin tocar el layout.
 */
export function EditorialFrame({
  src,
  alt = "",
  ratio = "aspect-[4/3]",
  accent,
  caption,
  className = "",
}: EditorialFrameProps) {
  return (
    <div
      className={`ap-duotone-wrap relative ${ratio} overflow-hidden rounded-[2px] bg-navy ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="ap-duotone object-cover"
        />
      ) : (
        <>
          <span className="ap-architecture" />
          <div className="absolute inset-0 z-10 flex flex-col justify-between p-7">
            {accent ? (
              <span className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none text-white/85">
                {accent}
              </span>
            ) : (
              <span />
            )}
            {caption && (
              <span className="text-xs uppercase tracking-[0.2em] text-gold">
                {caption}
              </span>
            )}
          </div>
        </>
      )}
      <Grain tone="dark" className="z-20" />
    </div>
  );
}
