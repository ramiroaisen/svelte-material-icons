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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 10H9.09C9.43 6.55 10.6 4 12 4S14.57 6.55 14.91 10H16.9C16.44 5.44 14.42 2 12 2S7.56 5.44 7.1 10H4L8 14L12 10M12 20C10.73 20 9.64 17.89 9.21 14.92L8 16.12L7.3 15.42C8 19.26 9.84 22 12 22C14.42 22 16.44 18.56 16.9 14H14.91C14.57 17.45 13.4 20 12 20M22 11H13L11 13H22V11M2 13H5L3 11H2V13" fill="{color}"/></svg>