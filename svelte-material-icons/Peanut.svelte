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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M16 12.77A2 2 0 0 1 15.86 10.12A5 5 0 0 0 13.04 2.12A5.74 5.74 0 0 0 12 2A5 5 0 0 0 7 7A5 5 0 0 0 8.11 10.12A2 2 0 0 1 8 12.72A5.5 5.5 0 0 0 10.81 21.87A5.42 5.42 0 0 0 12 22A5.5 5.5 0 0 0 16 12.77M13 5A1 1 0 1 1 12 6A1 1 0 0 1 13 5M11 18A1 1 0 1 1 12 17A1 1 0 0 1 11 18M12 15A1 1 0 1 1 13 16A1 1 0 0 1 12 15M14 19A1 1 0 1 1 15 18A1 1 0 0 1 14 19Z" fill="{color}"/></svg>