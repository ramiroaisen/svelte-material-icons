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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4.22 2A2.22 2.22 0 0 0 2 4.22V19.78C2 21 3 22 4.22 22H19.78A2.22 2.22 0 0 0 22 19.78V4.22C22 3 21 2 19.78 2H4.22M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 6A1.5 1.5 0 0 0 10.5 7.5A1.5 1.5 0 0 0 12 9A1.5 1.5 0 0 0 13.5 7.5A1.5 1.5 0 0 0 12 6M7.5 10.5A1.5 1.5 0 0 0 6 12C6 12.83 6.66 13.5 7.5 13.5A1.5 1.5 0 0 0 9 12A1.5 1.5 0 0 0 7.5 10.5M16.5 10.5A1.5 1.5 0 0 0 15 12A1.5 1.5 0 0 0 16.5 13.5A1.5 1.5 0 0 0 18 12A1.5 1.5 0 0 0 16.5 10.5Z" fill="{color}"/></svg>