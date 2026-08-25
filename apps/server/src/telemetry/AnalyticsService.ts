/**
 * Inert analytics sink.
 *
 * This build does not send usage data anywhere. `record` and `flush` exist only
 * so the call sites in orchestration keep type-checking; nothing is buffered,
 * persisted, or transmitted, and no installation identifier is derived.
 *
 * Do not reintroduce a transport here. Any network egress belongs behind an
 * explicit, user-visible opt-in that defaults to off.
 *
 * @module AnalyticsService
 */
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

export class AnalyticsService extends Context.Service<
  AnalyticsService,
  {
    /** Accepted and discarded. */
    readonly record: (
      event: string,
      properties?: Readonly<Record<string, unknown>>,
    ) => Effect.Effect<void>;

    /** No-op; nothing is ever buffered. */
    readonly flush: Effect.Effect<void>;
  }
>()("t3/telemetry/AnalyticsService") {
  static readonly layerNoop = Layer.succeed(
    AnalyticsService,
    AnalyticsService.of({
      record: () => Effect.void,
      flush: Effect.void,
    }),
  );

  /** Kept as an alias so existing test wiring reads unchanged. */
  static readonly layerTest = AnalyticsService.layerNoop;
}

export const layer = AnalyticsService.layerNoop;

export const layerTest = AnalyticsService.layerNoop;
