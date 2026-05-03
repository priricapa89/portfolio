interface Tag {
  label: string;
  href?: string;
}

interface TagListProps {
  tags: Tag[];
  className?: string;
  tagClassName?: string;
  noLinkClassName?: string;
}

export function TagList({ tags, className, tagClassName, noLinkClassName }: TagListProps) {
  return (
    <div className={className}>
      {tags.map((tag, i) =>
        tag.href ? (
          <a key={i} href={tag.href} target="_blank" rel="noreferrer" className={tagClassName}>
            {tag.label}
          </a>
        ) : (
          <span key={i} className={[tagClassName, noLinkClassName].filter(Boolean).join(" ")}>
            {tag.label}
          </span>
        )
      )}
    </div>
  );
}
