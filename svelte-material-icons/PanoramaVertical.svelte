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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18.5 12C18.5 8.1 19.3 5.1 19.9 3.3C20.1 2.7 19.7 2 19 2H5C4.3 2 3.8 2.7 4.1 3.3C4.7 5.4 5.5 8.1 5.5 12C5.5 15.9 4.7 18.7 4.1 20.7C3.8 21.3 4.3 22 5 22H19C19.7 22 20.2 21.3 20 20.7C19.3 18.7 18.5 15.9 18.5 12Z" fill="{color}"/></svg>