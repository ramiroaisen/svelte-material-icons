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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22.9 21.2L18.8 17.1C19.2 16.1 19 14.8 18.1 14C17.2 13.1 15.9 12.9 14.8 13.4L16.7 15.3L15.3 16.7L13.3 14.7C12.8 15.8 13 17.1 13.9 18.1C14.8 19 16 19.2 17 18.8L21.1 22.9C21.3 23.1 21.6 23.1 21.7 22.9L22.7 21.9C23 21.6 23 21.3 22.9 21.2M13 20H2V18C2 15.8 5.6 14 10 14C10.5 14 11 14 11.4 14.1C11.1 14.7 11 15.3 11 16C11 17.6 11.8 19.1 13 20M10 4C7.8 4 6 5.8 6 8S7.8 12 10 12 14 10.2 14 8 12.2 4 10 4" fill="{color}"/></svg>