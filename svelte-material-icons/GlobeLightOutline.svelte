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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13 8.08V2H11V8.08C7.61 8.57 5 11.47 5 15C5 18.87 8.13 22 12 22S19 18.87 19 15C19 11.47 16.39 8.57 13 8.08M12 20C9.24 20 7 17.76 7 15C7 13.87 7.39 12.84 8.03 12H15.97C16.61 12.84 17 13.87 17 15C17 17.76 14.76 20 12 20Z" fill="{color}"/></svg>