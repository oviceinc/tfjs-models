/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
export const COCO_KEYPOINTS = [
  'nose', 'leftEye', 'rightEye', 'leftEar', 'rightEar', 'leftShoulder',
  'rightShoulder', 'leftElbow', 'rightElbow', 'leftWrist', 'rightWrist',
  'leftHip', 'rightHip', 'leftKnee', 'rightKnee', 'leftAnkle', 'rightAnkle'
];
export const BLAZEPOSE_KEYPOINTS = [
  'nose',         'rightEyeInner', 'rightEye',     'rightEyeOuter',
  'leftEyeInner', 'leftEye',       'leftEyeOuter', 'rightEar',
  'leftEar',      'mouthRight',    'mouthLeft',    'rightShoulder',
  'leftShoulder', 'rightElbow',    'leftElbow',    'rightWrist',
  'leftWrist',    'rightPinky',    'leftPinky',    'rightIndex',
  'leftIndex',    'rightThumb',    'leftThumb',    'rightHip',
  'leftHip',      'rightKnee',     'leftKnee',     'rightAnkle',
  'leftAnkle',    'rightHeel',     'leftHeel',     'rightFoot',
  'leftFoot'
];
export const BLAZEPOSE_KEYPOINTS_BY_SIDE = {
  left: [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
  right: [1, 2, 3, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  middle: [0]
};
export const COCO_KEYPOINTS_BY_SIDE = {
  left: [1, 3, 5, 7, 9, 11, 13, 15],
  right: [2, 4, 6, 8, 10, 12, 14, 16],
  middle: [0]
};
export const COCO_CONNECTED_KEYPOINTS_PAIRS = [
  [0, 1], [0, 2], [1, 3], [2, 4], [5, 6], [5, 7], [5, 11], [6, 8], [6, 12],
  [7, 9], [8, 10], [11, 12], [11, 13], [12, 14], [13, 15], [14, 16]
];
export const BLAZEPOSE_CONNECTED_KEYPOINTS_PAIRS = [
  [0, 1],   [0, 4],   [1, 2],   [2, 3],   [3, 7],   [4, 5],
  [5, 6],   [6, 8],   [9, 10],  [11, 12], [11, 13], [11, 23],
  [12, 14], [14, 16], [12, 24], [13, 15], [15, 17], [16, 18],
  [16, 20], [15, 17], [15, 19], [15, 21], [16, 22], [17, 19],
  [18, 20], [23, 25], [23, 24], [24, 26], [25, 27], [26, 28],
  [27, 29], [28, 30], [27, 31], [28, 32], [29, 31], [30, 32]
];
export const COCO_KEYPOINTS_BY_NAME: {[index: string]: number} = {
  nose: 0,
  left_eye: 1,
  right_eye: 2,
  left_ear: 3,
  right_ear: 4,
  left_shoulder: 5,
  right_shoulder: 6,
  left_elbow: 7,
  right_elbow: 8,
  left_wrist: 9,
  right_wrist: 10,
  left_hip: 11,
  right_hip: 12,
  left_knee: 13,
  right_knee: 14,
  left_ankle: 15,
  right_ankle: 16
};
export const BLAZEPOSE_KEYPOINTS_BY_NAME: {[index: string]: number} = {
  nose: 0,
  left_eye_inner: 1,
  left_eye: 2,
  left_eye_outer: 3,
  right_eye_inner: 4,
  right_eye: 5,
  right_eye_outer: 6,
  left_ear: 7,
  right_ear: 8,
  mouth_left: 9,
  mouth_right: 10,
  left_shoulder: 11,
  right_shoulder: 12,
  left_elbow: 13,
  right_elbow: 14,
  left_wrist: 15,
  right_wrist: 16,
  left_pinky: 17,
  right_pinky: 18,
  left_index: 19,
  right_index: 20,
  left_thumb: 21,
  right_thumb: 22,
  left_hip: 23,
  right_hip: 24,
  left_knee: 25,
  right_knee: 26,
  left_ankle: 27,
  right_ankle: 28,
  left_heel: 29,
  right_heel: 30,
  left_foot_index: 31,
  right_foot_index: 32
};
