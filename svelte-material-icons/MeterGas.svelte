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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M16 4H15V2H13V4H11V2H9V4H8C5.79 4 4 5.79 4 8V18C4 20.21 5.79 22 8 22H16C18.21 22 20 20.21 20 18V8C20 5.79 18.21 4 16 4M12 18C10.62 18 9.5 16.9 9.5 15.54C9.5 14.45 9.93 14.15 12 11.75C14.05 14.13 14.5 14.45 14.5 15.54C14.5 16.9 13.38 18 12 18M16 10H8V8H16V10Z" fill="{color}"/></svg>