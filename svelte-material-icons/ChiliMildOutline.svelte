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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10.25 7.5L8.73 6.63C9.26 5.7 10.03 5 10.94 4.69C10.8 4.29 10.44 4 10 4V2C11.54 2 12.79 3.16 12.97 4.65C13.91 4.94 14.72 5.66 15.27 6.63L13.75 7.5L12 6.5L10.25 7.5M16 10V22C16 22 8 20 8 11V10C8 9.27 8.4 8.63 9 8.28L10.25 9L12 8L13.75 9L15 8.28C15.6 8.63 16 9.27 16 10M14 11.45L12 10.3L10 11.43C10.17 15.44 12.23 17.69 14 18.87V11.45Z" fill="{color}"/></svg>