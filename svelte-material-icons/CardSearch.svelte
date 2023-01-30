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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M11.5 9C10.12 9 9 10.12 9 11.5S10.12 14 11.5 14 14 12.88 14 11.5 12.88 9 11.5 9M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M16.79 18.21L13.88 15.3C13.19 15.74 12.37 16 11.5 16C9 16 7 14 7 11.5S9 7 11.5 7 16 9 16 11.5C16 12.38 15.74 13.19 15.3 13.89L18.21 16.79L16.79 18.21Z" fill="{color}"/></svg>