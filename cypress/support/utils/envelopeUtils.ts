/**
 * Builds a `URLSearchParams` payload to be sent with POST requests to the `/envelope/save` endpoint.
 *
 * This function formats regular, irregular, and due-date envelopes, as well as deleted envelope UUIDs,
 * into a stringified format compatible with Goodbudget's backend API.
 *
 * @param envReg - Array of regular envelopes (ENV_REG). Required.
 * @param envIrr - Array of irregular envelopes (ENV_IRR). Optional.
 * @param envDtPmt - Array of due-date payment envelopes (ENV_DT_PMT). Optional.
 * @param deleted - Array of envelopes (by UUID) to delete. Optional.
 * @param period - Envelope period type, e.g., 'MON' (Monthly). Default is 'MON'.
 * @param periodExtra0 - Extra period value 0. Default is '1'.
 * @param periodExtra1 - Extra period value 1. Default is '' (empty string).
 *
 * @returns A `URLSearchParams` object ready to be used in a POST request body.
 *
 * @example
 * const payload = buildPayload(updatedEnvReg);
 * const payload = buildPayload([], [], [], [{ Uuid: "123-abc" }]);
 */
interface EnvelopePayload {
  Uuid: string
  FullName: string
  Amount: string
  Period: string
  PeriodExtra: string
  EnvelopeType: string
}

interface DeletedEnvelope {
  Uuid: string
}

export const buildPayload = (
  envReg: EnvelopePayload[],
  envIrr: EnvelopePayload[] = [],
  envDtPmt: EnvelopePayload[] = [],
  deleted: DeletedEnvelope[] = [],
  period: string = 'MON',
  periodExtra0: string = '1',
  periodExtra1: string = ''
): URLSearchParams => {
  const payload = new URLSearchParams()

  payload.append('ENV_REG', JSON.stringify(envReg))
  payload.append('ENV_IRR', JSON.stringify(envIrr))
  payload.append('ENV_DT_PMT', JSON.stringify(envDtPmt))
  payload.append('deleted', JSON.stringify(deleted))
  payload.append('period', period)
  payload.append('period_extra_0', periodExtra0)
  payload.append('period_extra_1', periodExtra1)

  return payload
}
