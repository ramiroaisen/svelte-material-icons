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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 7C6.5 7 2 9.2 2 12C2 14.2 4.9 16.1 9 16.8V20L13 16L9 12V14.7C5.8 14.1 4 12.8 4 12C4 10.9 7 9 12 9S20 10.9 20 12C20 12.7 18.5 13.9 16 14.5V16.6C19.5 15.8 22 14.1 22 12C22 9.2 17.5 7 12 7Z" fill="{color}"/></svg>