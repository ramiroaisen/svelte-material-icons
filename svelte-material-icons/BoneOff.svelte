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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22.1 21.5L2.4 1.7L1.1 3L5.1 7H5C3.3 7 2 8.3 2 10C2 10.8 2.3 11.5 2.8 12C2.3 12.5 2 13.2 2 14C2 15.7 3.3 17 5 17S8 15.7 8 14C9.3 13.9 10.6 13.8 11.9 13.8L20.8 22.7L22.1 21.5M20 16.8L13.3 10.1C14.2 10.1 15.1 10 16 10C16 8.3 17.3 7 19 7S22 8.3 22 10C22 10.8 21.7 11.5 21.2 12C21.7 12.5 22 13.2 22 14C22 15.3 21.2 16.4 20 16.8Z" fill="{color}"/></svg>