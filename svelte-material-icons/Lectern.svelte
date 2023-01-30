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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 21V22H7V21H9V11H15V21H17M17.5 6C17.5 4.39 16.41 3.05 14.93 2.64C14.78 2.27 14.43 2 14 2C13.45 2 13 2.45 13 3C13 3.55 13.45 4 14 4C14.31 4 14.58 3.85 14.76 3.63C15.77 3.95 16.5 4.89 16.5 6H4L5 10H19L20 6H17.5Z" fill="{color}"/></svg>