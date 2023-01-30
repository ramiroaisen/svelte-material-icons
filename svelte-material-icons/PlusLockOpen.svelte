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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M11 5V11H5V13H11V19H13V13H19V11H13V5H11M19 15C17.95 15 16.9 15.8 16.9 16.82V18.64C16.45 18.64 16 19.07 16 19.5V22.05C16 22.56 16.45 23 16.9 23H21.03C21.55 23 22 22.56 22 22.13V19.58C22 19.07 21.55 18.64 21.1 18.64H17.88V16.82C17.88 16.24 18.4 15.87 19 15.87S20.13 16.24 20.13 16.82V17.18H21.1V16.82C21.1 15.8 20.05 15 19 15Z" fill="{color}"/></svg>