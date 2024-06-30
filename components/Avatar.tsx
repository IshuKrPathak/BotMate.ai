import Image from "next/image";
import React from "react";
import { createAvatar } from "@dicebear/core";
import { rings } from "@dicebear/collection";

const Avatar = ({ seed, className }: { seed: string; className?: string }) => {
  const avatar = createAvatar(rings, {
    seed: seed,
    // mode: 'full',
    // size: 100,
  });
  const svg = avatar.toString();
  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString(
    "base64"
  )}`;
  return (
    <Image
      src={dataUrl}
      alt="user avatar"
      width={100}
      height={100}
      className={className}
    />
  );
};

export default Avatar;