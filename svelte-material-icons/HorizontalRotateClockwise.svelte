<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 14L8 10L4 14H7.1C7.56 18.56 9.58 22 12 22S16.44 18.56 16.9 14H14.91C14.57 17.45 13.4 20 12 20S9.43 17.45 9.09 14H12M12 4C13.4 4 14.57 6.55 14.91 10H16.9C16.44 5.44 14.42 2 12 2C9.84 2 8 4.74 7.3 8.58L8 7.88L9.21 9.08C9.64 6.11 10.73 4 12 4M22 13V11H11L13 13H22M2 13H3L5 11H2V13Z" fill="{color}"/></svg>